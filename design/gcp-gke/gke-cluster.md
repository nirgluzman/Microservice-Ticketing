## Google Kubernetes Engine (GKE)

- Creating a zonal cluster
  https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster
  https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-regional-cluster
  https://cloud.google.com/sdk/gcloud/reference/container/clusters/create

```bash
gcloud container clusters create ticketing-dev \
    --release-channel regular \
    --zone us-central1-a \
    --node-locations us-central1-a \
    --machine-type "g1-small" \
    --disk-size "50"
```

- zone COMPUTE_ZONE -> the compute zone for the cluster control plane.
- node-locations COMPUTE_ZONE: the zone for your node pool, such as us-central1-a.
- CHANNEL: the type of release channel, which can be one of rapid, regular (default), stable, or
  None.

* Deleting a cluster

```bash
gcloud container clusters delete --zone <name_of_zone> <name_of_your_cluster>
```

- Create an Autopilot cluster
  https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster#gcloud

  https://cloud.google.com/sdk/gcloud/reference/container/clusters/create-auto

  https://stackoverflow.com/questions/67996806/gcp-kubernetes-autopilot-mode-what-is-the-free-tier
  (cost optimization)

```bash
gcloud container clusters create-auto CLUSTER_NAME \
    --location=LOCATION \
    --project=PROJECT_ID
```

--location = Compute zone or region (e.g. us-central1-a or us-central1) for the cluster.

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
kubectl apply -f \
https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.0/deploy/static/provider/cloud/deploy.yaml
```

- Set up authentication for Docker
  https://cloud.google.com/artifact-registry/docs/docker/authentication#before_you_begin

```bash
gcloud auth
configure-docker us-central1-docker.pkg.dev
```
