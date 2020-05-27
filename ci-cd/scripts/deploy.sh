#!/bin/bash

set -e

source $HOME/google-cloud-sdk/path.bash.inc

TAG=latest

# if [[ $TRAVIS_TAG ]]; then
#   TAG=$TRAVIS_TAG
# else
#   TAG=$COMMIT
# fi

echo "DOCKER_IMAGE=$DOCKER_IMAGE_NAME, TAG=$TAG"

echo "Build docker image"
docker build -f ci-cd/docker/Dockerfile \
             --build-arg NODE_ENV=production
             -t $DOCKER_IMAGE_NAME .

echo "Push docker image"
docker tag $DOCKER_IMAGE_NAME gcr.io/keller-covered/$DOCKER_IMAGE_NAME:$TAG;
docker push gcr.io/keller-covered/$DOCKER_IMAGE_NAME:$TAG;

# case $TRAVIS_BRANCH in
#   "develop")
#     K8S_CONTEXT="gke_keller-covered_us-central1-a_kellercovered-dev"
#     ;;
#   "deployment")
#     K8S_CONTEXT="gke_keller-covered_us-central1-a_kellercovered-dev"
#     ;;
#   "staging")
#     K8S_CONTEXT="gke_keller-covered_us-central1-a_staging"
#     ;;
#   "master")
#     K8S_CONTEXT="gke_keller-covered_us-central1-a_gke-cluster-prod"
#     ;;
#   "v"*)
#     K8S_CONTEXT="gke_keller-covered_us-central1-a_staging"
#     ;;
#   *)
#     K8S_CONTEXT="no-context"
#     ;;
# esac

# if [[ $TRAVIS_PULL_REQUEST == "false" && $K8S_CONTEXT != "no-context" ]]; then
#   echo "Deploying to kubernetes"
#   echo "Context: $K8S_CONTEXT"
#   export KUBECONFIG=$HOME/kubeconfig
#   kubectl config use-context $K8S_CONTEXT;
#   kubectl apply -f ./deployment/deployment.yaml;
#   kubectl set image deployments/$DOCKER_IMAGE_NAME $DOCKER_IMAGE_NAME=gcr.io/keller-covered/$DOCKER_IMAGE_NAME:$TAG;
# fi