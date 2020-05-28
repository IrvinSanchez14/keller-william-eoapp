#!/bin/bash

set -e

source $HOME/google-cloud-sdk/path.bash.inc

export KUBECONFIG=$HOME/kubeconfig

sudo touch ${KUBECONFIG}

TAG=$(git tag -l | tail -n 1)

[[ -z "${TAG}" ]]  && TAG="v0.1.0"

echo "DOCKER_IMAGE=${DOCKER_IMAGE_NAME}, TAG=${TAG}"

echo "Build docker image"
docker build -f ci-cd/docker/Dockerfile \
             --build-arg APP_ENV=production \
             -t $DOCKER_IMAGE_NAME .

K8S_CLUSTER_NAME=""
K8S_CLUSTER_ZONE="us-central1-a"

case ${TRAVIS_BRANCH} in
  "k8s-deployment-dev")
    K8S_CLUSTER_NAME="k8s-cluster-development"
    TAG=semver inc minor ${TAG}
    TAG=semver set prerelease  ${TAG} alpha
    TAG=semver set metadata    ${TAG} "${TRAVIS_BUILD_ID}-${TRAVIS_COMMIT}"
    ;;
  # "deployment")
  #   K8S_CLUSTER_NAME="gke_keller-covered_us-central1-a_kellercovered-dev"
  #   ;;
  # "staging")
  #   K8S_CLUSTER_NAME="gke_keller-covered_us-central1-a_staging"
  #   ;;
  # "master")
  #   K8S_CLUSTER_NAME="gke_keller-covered_us-central1-a_gke-cluster-prod"
  #   ;;
  # "v"*)
  #   K8S_CLUSTER_NAME="gke_keller-covered_us-central1-a_staging"
  #   ;;
  # *)
  #   K8S_CLUSTER_NAME="no-context"
  #   ;;
esac

echo "Push docker image"
docker tag $DOCKER_IMAGE_NAME gcr.io/keller-covered/${DOCKER_IMAGE_NAME}:${TAG};
docker push gcr.io/keller-covered/${DOCKER_IMAGE_NAME}:${TAG};

if [[ ${TRAVIS_PULL_REQUEST} == "false" && ! -z "${K8S_CLUSTER_NAME}" ]]; then
  echo "Deploying to kubernetes"
  gcloud container clusters get-credentials ${K8S_CLUSTER_NAME} --zone ${K8S_CLUSTER_ZONE}

  sudo chmod 755 ${KUBECONFIG}
  
  kubectl get secret ci-cd-secrets -n ${CHART_NAMESPACE} -o json | jq -r '.data.values_yaml' > ci-cd/k8s/helm-chart/values-local.yaml

  echo "Upgrading Helm chart";

  sed -i "/appVersion/c\\appVersion: ${VERSION}" ci-cd/k8s/helm-chart/Chart.yaml

  helm upgrade --install ${CHART_NAME} ci-cd/k8s/helm-chart \
               -f ci-cd/k8s/helm-chart/values-local.yaml \
               -n ${CHART_NAMESPACE}
fi