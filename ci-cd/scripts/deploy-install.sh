#!/bin/bash

set -e

source ci-cd/scripts/functions.bash.inc

echo "Pull Request=$TRAVIS_PULL_REQUEST"
echo "TRAVIS_BRANCH=$TRAVIS_BRANCH"

echo "Setup CI Tools binaries"

setup_ci_tools_binaries

echo "Get secrets"

# Sign in to 1Password
op_signin

op_get_gcloud_key_account > ${HOME}/key-account.json


echo "Setup gcloud sdk"

if [ ! -d "${HOME}/google-cloud-sdk/bin" ]; then
  rm -rf ${HOME}/google-cloud-sdk;
  curl https://sdk.cloud.google.com | bash > /dev/null;
fi

source ${HOME}/google-cloud-sdk/path.bash.inc
gcloud components update kubectl
gcloud version

echo "Activate account"

gcloud auth activate-service-account --key-file ${HOME}/key-account.json
gcloud config set project keller-covered

echo "Configure docker"

gcloud -q auth configure-docker

# Sign out of 1Password and clean up
op_signout