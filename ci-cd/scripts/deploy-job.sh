#!/bin/bash

set -e

source ${HOME}/google-cloud-sdk/path.bash.inc

export KUBECONFIG=${HOME}/kubeconfig
export SIGN_IN_ADDRESS=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.signin_address')
export EMAIL_ADDRESS=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.email_address')
export MASTER_KEY=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.master_key')
export SECRET_KEY=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.secret_key')
export VAULT_UUID=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.vault_uuid')

eval $(echo ${MASTER_KEY} | op signin ${SIGN_IN_ADDRESS} ${EMAIL_ADDRESS} ${SECRET_KEY})

touch ${KUBECONFIG}


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
docker tag $DOCKER_IMAGE_NAME gcr.io/keller-covered/${DOCKER_IMAGE_NAME}:${TAG};
docker push gcr.io/keller-covered/${DOCKER_IMAGE_NAME}:${TAG};

if [[ ${TRAVIS_PULL_REQUEST} == "false" && ! -z "${K8S_CLUSTER_NAME}" ]]; then
  echo "Deploying to kubernetes"
  gcloud container clusters get-credentials ${K8S_CLUSTER_NAME} --zone ${K8S_CLUSTER_ZONE}
  
  sudo chown ${USER} ${KUBECONFIG}
  sudo chmod 655 ${KUBECONFIG}

  echo "${VAULT_UUID} ---- ${K8S_CLUSTER_NAME}-${CHART_NAME}-values-yaml"

  op get document --vault "${VAULT_UUID}" "${K8S_CLUSTER_NAME}-${CHART_NAME}-values-yaml" > ci-cd/k8s/helm-chart/values-local.yaml

  echo "Upgrading Helm chart";

  sed -i "/appVersion/c\\appVersion: ${TAG}" ci-cd/k8s/helm-chart/Chart.yaml

  helm upgrade --install ${CHART_NAME} ci-cd/k8s/helm-chart \
               -f ci-cd/k8s/helm-chart/values-local.yaml \
               -n ${CHART_NAMESPACE}
fi