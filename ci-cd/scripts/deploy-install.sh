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

  docker run --rm  -v "$CI_BIN_PATH/:/workspace" emilioforrer/ci-tools:0.3.0 sudo cp /usr/local/bin/op /workspace
  
fi

sudo cp -r $CI_BIN_PATH/* /usr/local/bin

echo "Get secrets"

export SIGN_IN_ADDRESS=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.signin_address')
export EMAIL_ADDRESS=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.email_address')
export MASTER_KEY=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.master_key')
export SECRET_KEY=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.secret_key')
export VAULT_UUID=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.vault_uuid')

eval $(echo ${MASTER_KEY} | op signin ${SIGN_IN_ADDRESS} ${EMAIL_ADDRESS} ${SECRET_KEY})

op get document --vault $VAULT_UUID "gcloud-key-account-json" > ${HOME}/key-account.json


echo "Setup gcloud sdk"
if [ ! -d "$HOME/google-cloud-sdk/bin" ]; then
  rm -rf $HOME/google-cloud-sdk;
  curl https://sdk.cloud.google.com | bash > /dev/null;
fi
source $HOME/google-cloud-sdk/path.bash.inc
gcloud components update kubectl
gcloud version

echo "Activate account"
gcloud auth activate-service-account --key-file ${HOME}/key-account.json
gcloud config set project keller-covered

echo "Configure docker"
gcloud -q auth configure-docker