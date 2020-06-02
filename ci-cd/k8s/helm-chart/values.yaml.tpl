# Default values for chart.
# This is a YAML-formatted file.
# Declare variables to be passed into your templates.

main:
  docker:
    registry:
      url: "${DOCKER_REGISTRY_URL}"
      username: "${DOCKER_REGISTRY_USERNAME}"
      password: "${DOCKER_REGISTRY_PASSWORD}"
  dependencies:
    postgres: true
  labels:
    app: ${CHART_NAME}
  selectorLabels:
    app: ${CHART_NAME}
  hpa:
    maxReplicas: 10
    minReplicas: 3
    cpuAverageUtilization: 70
    memoryAverageUtilization: 70
  deployment:
    containerPort: 3000
    replicaCount: 3
    resources:
      requests:
        cpu: "5m" # Idle 4m
        memory: "130mi" # Idle 100mi
      limits:
        cpu: "7m"
        memory: "300mi"
    podSecurityContext: {}
    securityContext: {}
    nodeSelector: {}
    tolerations: []
    affinity: {}
    image:
      repository: "${DOCKER_REGISTRY_URL}"
      pullPolicy: Always
    imagePullSecrets:
      - name: ${CHART_NAME}-docker-registry-secrets
    envSecrets: []
      # - name: "STAGE"
      #   value: "development"
  service:
    type: ClusterIP
    port: 3000
  serviceAccount:
    create: true
  virtualService:
    create: false
    uriPrefix: "/${CHART_NAME}"
    uriRewrite: "/"
    hosts: 
    - "${VS_HOST}"
    serviceHost: ${CHART_NAME}
    gateways:
    - global-gateway