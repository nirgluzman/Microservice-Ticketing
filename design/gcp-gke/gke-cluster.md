## Google Kubernetes Engine (GKE)

- Creating a zonal cluster
  https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster
  https://cloud.google.com/sdk/gcloud/reference/container/clusters/create

```bash
gcloud container clusters create ticketing-dev \
    --release-channel regular \
    --zone us-central1-a \
    --node-locations us-central1-a \
    --machine-type "g1-small" \
    --disk-size "50"
```

- Deleting a cluster

```bash
gcloud container clusters delete CLUSTER_NAME
```

- Reduce cluster node size to zero:
  https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19102628#questions/10484812

```bash
gcloud container clusters resize --zone <name_of_zone> <name_of_your_cluster> --num-nodes=0
```

- Increase the number of nodes:

```bash
gcloud container clusters resize --zone <name_of_zone>
<name_of_your_cluster> --num-nodes=3
```

- Tagging images for Artifact Registry
  https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling
  https://cloud.google.com/artifact-registry/docs/repositories/create-repos#create-gcloud

- Image tag:

```code
LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY/IMAGE:TAG
```

- Command to create a new repository:

```bash
gcloud artifacts repositories create ticketing-dev \
 --repository-format=docker \
 --location=us-central1
```

- Setup ingress-nginx on GCP: https://kubernetes.github.io/ingress-nginx/

```bash
kubectl apply -f
https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.0/deploy/static/provider/cloud/deploy.yaml
```

- Set up authentication for Docker
  https://cloud.google.com/artifact-registry/docs/docker/authentication#before_you_begin

```bash
gcloud auth
configure-docker us-central1-docker.pkg.dev
```
