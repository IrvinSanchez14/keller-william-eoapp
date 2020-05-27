#!/bin/bash

set -e

source $HOME/google-cloud-sdk/path.bash.inc

export KUBECONFIG=$HOME/kubeconfig

sudo touch $KUBECONFIG


TAG=latest

# if [[ $TRAVIS_TAG ]]; then
#   TAG=$TRAVIS_TAG
# else
#   TAG=$COMMIT
# fi

echo "DOCKER_IMAGE=$DOCKER_IMAGE_NAME, TAG=$TAG"

echo "Build docker image"
docker build -f ci-cd/docker/Dockerfile \
             --build-arg APP_ENV=production \
             -t $DOCKER_IMAGE_NAME .

echo "Push docker image"
docker tag $DOCKER_IMAGE_NAME gcr.io/keller-covered/$DOCKER_IMAGE_NAME:$TAG;
docker push gcr.io/keller-covered/$DOCKER_IMAGE_NAME:$TAG;


echo "CHECK clusters"

K8S_CLUSTER_NAME=""
K8S_CLUSTER_ZONE="us-central1-a"

case $TRAVIS_BRANCH in
  "k8s-deployment-dev")
    K8S_CLUSTER_NAME="k8s-cluster-development"
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

if [[ $TRAVIS_PULL_REQUEST == "false" && ! -z "$K8S_CLUSTER_NAME" ]]; then
  echo "Deploying to kubernetes"
  gcloud container clusters get-credentials $K8S_CLUSTER_NAME --zone $K8S_CLUSTER_ZONE
  sudo chmod 755 $KUBECONFIG
  helm upgrade --install ${CHART_NAME} ci-cd/k8s/helm-chart \
               -f ci-cd/k8s/helm-chart/values-local.yaml \
               -n ${CHART_NAMESPACE}
fi