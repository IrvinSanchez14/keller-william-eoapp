#!/bin/bash

docker run -t -v "$KUBECONFIG:$KUBECONFIG" -e KUBECONFIG="$KUBECONFIG" emilioforrer/ci-tools:0.3.0 $@