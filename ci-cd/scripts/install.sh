#!/bin/bash

set -e

echo "Pull Request=$TRAVIS_PULL_REQUEST"
echo "TRAVIS_BRANCH=$TRAVIS_BRANCH"

echo "Install kubectl"
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

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
cp key.json $HOME
cp config $HOME/kubeconfig

echo "Activate account"
gcloud auth activate-service-account --key-file $HOME/key.json
gcloud config set project keller-covered

echo "Configure docker"
gcloud -q auth configure-docker