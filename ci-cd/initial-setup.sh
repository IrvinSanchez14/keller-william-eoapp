#!/bin/bash

# export CHART_NAME=my-project
# export CHART_NAMESPACE=my-project-namespace
# export DOCKER_REGISTRY_URL=gcr.io
# export DOCKER_REGISTRY_USERNAME=_json_key
# export DOCKER_REGISTRY_PASSWORD=""

echo -e ""
echo -e "\033[0;33m\e[1mWarning:\e[21m this process will overwrite the next files:\e[0m"
echo -e " .env"
echo -e " .dockerignore"
echo -e " .gitignore"
echo -e " .travis.yml"
echo -e "\e[0m \e[36m"
read -p 'Do you wish to continue? [Y/n] '  YN
echo -e "\e[0m"

if [[ ${YN} == "y" || ${YN} == "Y" || ${YN} == "" ]] ; then
  WORKING_DIR=$(pwd)
  echo "Installing scripts..."
  echo ""
  cp ${WORKING_DIR}/ci-cd/docker/.env.example ./.env
  cp ${WORKING_DIR}/ci-cd/docker/.dockerignore.example ./.dockerignore
  cp ${WORKING_DIR}/ci-cd/docker/.gitignore.example ./.gitignore
  echo "Replacing templates..."
  echo ""
  cat ${WORKING_DIR}/ci-cd/.travis.yml.tpl | \
  sed -e "/    - DOCKER_IMAGE_NAME=/c\\    - DOCKER_IMAGE_NAME=${CHART_NAME}" | \
  sed -e "/    - CHART_NAME=/c\\    - CHART_NAME=${CHART_NAME}" | \
  sed -e "/    - CHART_NAMESPACE=/c\\    - CHART_NAMESPACE=${CHART_NAMESPACE}" \
   > ${WORKING_DIR}/.travis.yml
  envsubst < ${WORKING_DIR}/ci-cd/k8s/helm-chart/Chart.yaml.tpl > ${WORKING_DIR}/ci-cd/k8s/helm-chart/Chart.yaml
  envsubst < ${WORKING_DIR}/ci-cd/k8s/helm-chart/values.yaml.tpl > ${WORKING_DIR}/ci-cd/k8s/helm-chart/values.yaml
  echo -e "\e[32m"
  echo "Done"
  echo ""
else

  echo "Exiting.."
  echo ""
  exit 0
fi


