#!/bin/bash

set -e

echo "Pull Request=$TRAVIS_PULL_REQUEST"
echo "TRAVIS_BRANCH=$TRAVIS_BRANCH"


CI_BIN_PATH=$HOME/ci-tools/bin

if [ ! -d "$CI_BIN_PATH" ]; then

  mkdir -p "$CI_BIN_PATH"

  docker run --rm  -v "$CI_BIN_PATH/:/workspace" emilioforrer/ci-tools:0.3.0 sudo cp /usr/local/bin/semver /workspace

  docker run --rm  -v "$CI_BIN_PATH/:/workspace" emilioforrer/ci-tools:0.3.0 sudo cp /usr/local/bin/helm /workspace

  docker run --rm  -v "$CI_BIN_PATH/:/workspace" emilioforrer/ci-tools:0.3.0 sudo cp /usr/local/bin/kubectl /workspace
fi

sudo cp -r $CI_BIN_PATH/* /usr/local/bin

# echo "Install kubectl"
# curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
# chmod +x ./kubectl
# sudo mv ./kubectl /usr/local/bin/kubectl

# echo "Install helm"
# HELM_VERSION="v3.1.2"
# wget -q https://get.helm.sh/helm-${HELM_VERSION}-linux-amd64.tar.gz -O - | tar -xzO linux-amd64/helm > helm && \
# sudo chmod +x ./helm && \
# sudo mv ./helm /usr/local/bin/helm

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
sudo chmod 755 $HOME/kubeconfig

echo "Activate account"
gcloud auth activate-service-account --key-file $HOME/key-account.json
gcloud config set project keller-covered

echo "Configure docker"
gcloud -q auth configure-docker