#!/bin/bash

set -e

op_signin () {
  export SIGN_IN_ADDRESS=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.signin_address')
  export EMAIL_ADDRESS=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.email_address')
  export MASTER_KEY=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.master_key')
  export SECRET_KEY=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.secret_key')
  export VAULT_UUID=$(echo -n "${OP_ACCOUNT}" | base64 --decode | jq -r '.vault_uuid')
  eval $(echo ${MASTER_KEY} | op signin ${SIGN_IN_ADDRESS} ${EMAIL_ADDRESS} ${SECRET_KEY})
}

op_signout () {
  op signout
  unset OP_SESSION_my
  unset SIGN_IN_ADDRESS
  unset EMAIL_ADDRESS
  unset MASTER_KEY
  unset SECRET_KEY
  unset VAULT_UUID
}

op_get_values_yaml () {
  op get document --vault "${VAULT_UUID}" "${K8S_CLUSTER_NAME}-${CHART_NAME}-values-yaml"
}

op_get_gcloud_key_account () {
  op get document --vault "${VAULT_UUID}" "gcloud-key-account-json"
}


setup_ci_tools_binaries () {
  CI_BIN_PATH=$HOME/ci-tools/bin

  if [ ! -d "$CI_BIN_PATH" ]; then

    mkdir -p "$CI_BIN_PATH"

    docker run --rm  -v "$CI_BIN_PATH/:/workspace" emilioforrer/ci-tools:0.3.0 sudo cp /usr/local/bin/semver /workspace

    docker run --rm  -v "$CI_BIN_PATH/:/workspace" emilioforrer/ci-tools:0.3.0 sudo cp /usr/local/bin/helm /workspace

    docker run --rm  -v "$CI_BIN_PATH/:/workspace" emilioforrer/ci-tools:0.3.0 sudo cp /usr/local/bin/kubectl /workspace

    docker run --rm  -v "$CI_BIN_PATH/:/workspace" emilioforrer/ci-tools:0.3.0 sudo cp /usr/local/bin/op /workspace
    
  fi

  sudo cp -r $CI_BIN_PATH/* /usr/local/bin
}