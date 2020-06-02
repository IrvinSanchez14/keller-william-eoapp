# Next Js - Deployment

## Copy and replace templates variables

Set this env variables

```bash
export CHART_NAME=my-project
export CHART_NAMESPACE=my-project-namespace
export DOCKER_REGISTRY_URL=gcr.io/keller-covered/${CHART_NAME}
export DOCKER_REGISTRY_USERNAME=_json_key
export DOCKER_REGISTRY_PASSWORD="" # leave this is in blank to not commit in the repo

./ci-cd/initial-setup.sh
```



## Set Env variables in travis ci

Add a new env variable in travis ci:

- Go to the repo
  - More options
    - Settings
      - Add new variable:
        - name: OP_ACCOUNT
        - value: You can get the value from 1password, under the "travis-ci-1password-account" secret, and then the value of the label "OP_ACCOUNT"