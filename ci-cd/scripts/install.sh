#!/bin/bash

set -e

export KUBECONFIG=$HOME/kubeconfig

sudo mv ./ci-cd/scripts/ct.sh /usr/local/bin/ct

echo "Pull Request=$TRAVIS_PULL_REQUEST"
echo "TRAVIS_BRANCH=$TRAVIS_BRANCH"

echo "Setup gcloud sdk"
if [ ! -d "$HOME/google-cloud-sdk/bin" ]; then
  rm -rf $HOME/google-cloud-sdk;
  curl https://sdk.cloud.google.com | bash > /dev/null;
fi
source $HOME/google-cloud-sdk/path.bash.inc
gcloud components update kubectl
gcloud version

echo "Decrypt secrets"
openssl aes-256-cbc -K $encrypted_3b9f0b9d36d1_key -iv $encrypted_3b9f0b9d36d1_iv -in secrets.tar.enc -out secrets.tar -d
tar xvf secrets.tar
cp key-account.json $HOME
cp .kube/config $HOME/kubeconfig

echo "Activate account"
gcloud auth activate-service-account --key-file $HOME/key-account.json
gcloud config set project keller-covered
gcloud config config-helper 1>/dev/null

echo "Configure docker"
gcloud -q auth configure-docker

echo "CHECK DOCKER IMAGE"
# gcloud container clusters get-credentials k8s-cluster-development --zone us-central1-a
ct kubectl config get-contexts