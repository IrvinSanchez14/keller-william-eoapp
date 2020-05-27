## Setup

```
export REPOSITORY_NAME=kc-frontend-eo
export NAMESPACE=kc-frontend
export DOCKER_IMAGE_NAME=gcr.io/keller-covered/${REPOSITORY_NAME}
export DOCKER_IMAGE_TAG=latest
```

## Build image

```
docker build -f ci-cd/docker/Dockerfile  -t ${DOCKER_IMAGE_NAME} .
docker tag ${DOCKER_IMAGE_NAME} ${DOCKER_IMAGE_NAME}:$DOCKER_IMAGE_TAG;
docker push ${DOCKER_IMAGE_NAME}:$DOCKER_IMAGE_TAG;
```

## Instalation

```bash
kubectl create ns ${NAMESPACE}
```

```
helm upgrade --install ${REPOSITORY_NAME} ci-cd/k8s/helm-chart -f ci-cd/k8s/helm-chart/values-local.yaml -n ${NAMESPACE}

kubectl rollout status deployment ${REPOSITORY_NAME} -n ${NAMESPACE}
```

## Script to update the app version

```bash
export VERSION=latest
sed -i "/appVersion/c\appVersion: $VERSION" k8s/helm-chart/Chart.yaml
```

## Uninstall


```bash
helm uninstall ${REPOSITORY_NAME}
```

## Istio

### Namespace

Enable Istio auto injection

```bash
kubectl label namespace ${NAMESPACE} istio-injection=enabled --overwrite
```

### Gateway

In order to virtual service to work with Istio, you need to have  gateway alredy configurated. e.g.

```
cat << EOF | kubectl apply -f -
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: global-gateway
  namespace: ${NAMESPACE}
spec:
  selector:
    istio: ingressgateway # use istio default controller
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "*"
  - port:
      number: 443
      name: https
      protocol: HTTP
    hosts:
    - "*"
EOF
```