os: linux
dist: xenial

language: node_js
node_js:
  - '12.16.3'
  
cache:
  directories:
    - "${HOME}/google-cloud-sdk/"
    - "${HOME}/ci-tools/"
    - node_modules # The specified paths are relative to the build directory.
#    - "${HOME}/docker_images/"

# before_script:
# - docker load -i ${HOME}/docker_images/images.tar || true

# before_cache:
# - docker save -o ${HOME}/docker_images/images.tar $(docker images -a -q)

services:
  - docker

env:
  global:
    - COMMIT=${TRAVIS_COMMIT::8}
    - DOCKER_IMAGE_NAME=${CHART_NAME}
    - CLOUDSDK_CORE_DISABLE_PROMPTS=1
    - CHART_NAME=${CHART_NAME}
    - CHART_NAMESPACE=${CHART_NAMESPACE}
stages:
  - test
  - deploy

jobs:
  include:
    - stage: test
      name: "Test"
      install: ./ci-cd/scripts/test-install.sh
      script: ./ci-cd/scripts/test-job.sh

    - stage: Deploy
      if: (branch IN (k8s-deployment-dev, k8s-deployment-staging, k8s-deployment-prod) OR tag IS present) AND type NOT IN (pull_request, cron)
      name: "Deployment"
      install: ./ci-cd/scripts/deploy-install.sh
      script: ./ci-cd/scripts/deploy-job.sh
