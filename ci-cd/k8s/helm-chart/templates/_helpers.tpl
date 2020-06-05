{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "helpers.name" -}}
{{- default .Chart.Name .Values.main.name | trunc 63 | trimSuffix "-" -}}
{{- end -}}


{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "helpers.fullname" -}}
{{- if .Values.main.fullname -}}
{{- .Values.main.fullname | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.main.name -}}
{{- if contains $name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "helpers.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Common labels
*/}}
{{- define "helpers.labels" -}}
helm.sh/chart: {{ include "helpers.chart" . }}
{{- range $key, $value := .Values.main.labels }}
{{ $key  }}: {{ $value | quote }}
{{- end }}
app.kubernetes.io/name: {{ include "helpers.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}}

{{/*
Selector labels
*/}}
{{- define "helpers.selectorLabels" -}}
app.kubernetes.io/name: {{ include "helpers.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- range $key, $value := .Values.main.selectorLabels }}
{{ $key | quote }}: {{ $value | quote }}
{{- end }}
{{- end -}}

{{/*
Create the name of the service account to use
*/}}
{{- define "helpers.serviceAccountName" -}}
{{- if .Values.main.serviceAccount.create -}}
    {{ default (include "helpers.fullname" .) .Values.main.serviceAccount.name }}
{{- else -}}
    {{ default "default" .Values.main.serviceAccount.name }}
{{- end -}}
{{- end -}}


{{- define "helpers.imagePullSecret" }}
{{- printf "{\"auths\": {\"%s\": {\"auth\": \"%s\"}}}" .Values.main.docker.registry.url (printf "%s:%s" .Values.main.docker.registry.username .Values.main.docker.registry.password | b64enc) | b64enc }}
{{- end }}