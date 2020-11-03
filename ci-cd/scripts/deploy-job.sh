#!/bin/bash

set -e

source ${HOME}/google-cloud-sdk/path.bash.inc
source ci-cd/scripts/functions.bash.inc

export KUBECONFIG=${HOME}/kubeconfig

touch ${KUBECONFIG}
sudo chown ${USER} ${KUBECONFIG}
sudo chmod 655 ${KUBECONFIG}


TAG=$(git tag -l | tail -n 1)

[[ -z "${TAG}" ]]  && TAG="v0.1.0"

echo "DOCKER_IMAGE=${DOCKER_IMAGE_NAME}, TAG=${TAG}"

echo "Build docker image"

docker build -f ci-cd/docker/Dockerfile \
             --build-arg NODE_ENV=production \
             -t $DOCKER_IMAGE_NAME .

K8S_CLUSTER_NAME=""
K8S_CLUSTER_ZONE="us-central1-a"

case ${TRAVIS_BRANCH} in
  "k8s-deployment-dev")
    K8S_CLUSTER_NAME="k8s-cluster-development"
    TAG=$(semver inc minor ${TAG})
    TAG=$(semver set prerelease  ${TAG} "alpha.${TRAVIS_BUILD_ID}")
    ;;
  "k8s-deployment-staging")
    K8S_CLUSTER_NAME="k8s-cluster-staging"
    TAG=$(semver inc minor ${TAG})
    TAG=$(semver set prerelease  ${TAG} "beta.${TRAVIS_BUILD_ID}")
    ;;
  "k8s-deployment-prod")
    K8S_CLUSTER_NAME="k8s-cluster-production"
    TAG=$(semver inc minor ${TAG})
    ;;
esac

echo "Push docker image"

docker tag $DOCKER_IMAGE_NAME gcr.io/keller-covered/${DOCKER_IMAGE_NAME}:${TAG}

docker push gcr.io/keller-covered/${DOCKER_IMAGE_NAME}:${TAG}

if [[ ${TRAVIS_PULL_REQUEST} == "false" && ! -z "${K8S_CLUSTER_NAME}" ]]; then
  # Sign in to 1Password
  op_signin

  echo "Deploying to kubernetes"

  gcloud container clusters get-credentials ${K8S_CLUSTER_NAME} --zone ${K8S_CLUSTER_ZONE}

  echo "Upgrading Helm chart";

  op_get_values_yaml > ci-cd/k8s/helm-chart/values-local.yaml

  sed -i "/appVersion/c\\appVersion: ${TAG}" ci-cd/k8s/helm-chart/Chart.yaml

  helm upgrade --install ${CHART_NAME} ci-cd/k8s/helm-chart \
               -f ci-cd/k8s/helm-chart/values-local.yaml \
               -n ${CHART_NAMESPACE}

  # Sign out of 1Password and clean up
  op_signout
fi
