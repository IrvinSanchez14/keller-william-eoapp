# Next Js - Deployment

## Replace templates variables

Set this env variables

```bash
export CHART_NAME=my-project
export CHART_NAMESPACE=my-project-namespace
export DOCKER_REGISTRY_URL=gcr.io
export DOCKER_REGISTRY_USERNAME=_json_key
export DOCKER_REGISTRY_PASSWORD="" # leave this is in blank to not commit in the repo

cat ci-cd/.travis.yml.tpl | \
sed -e "/    - CHART_NAME=/c\\    - CHART_NAME=${CHART_NAME}" | \
sed -e "/    - CHART_NAMESPACE=/c\\    - CHART_NAMESPACE=${CHART_NAMESPACE}" \
 > .travis.yml
```

## Copy files to the project's root directory

```bash
cp ci-cd/docker/.env.example ./.env
cp ci-cd/docker/.dockerignore.example ./.dockerignore
cp ci-cd/docker/.gitignore.example ./.gitignore
cp ci-cd/docker/.travis.example ./.travis
```



## Set Env variables in travis ci

Add a new env variable in travis ci:

- Go to the repo
  - More options
    - Settings
      - Add new variable:
        - name: OP_ACCOUNT
        - value: You can get the value from 1password, under the "travis-ci-1password-account" secret, and then the value of the label "OP_ACCOUNT"