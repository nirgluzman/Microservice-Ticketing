## Create an Autopilot cluster

https://cloud.google.com/sdk/gcloud/reference/container/clusters/create-auto

```bash
gcloud container clusters create-auto ticketing-dev --location europe-west3
```

## Delete a cluster

```bash
gcloud container clusters delete --region europe-west3 ticketing-dev
```

## Confirm `kubectl` Context:

```bash
kubectl config current-context
```

## Setup ingress-nginx

```bash
kubectl apply -f \
https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.0/deploy/static/provider/cloud/deploy.yaml
```

## Start skaffold

```bash
skaffold dev
```
