#!/bin/bash 

docker build --platform linux/amd64 -t anilora-image .


docker tag anilora-image gcr.io/anilora-453406/anilora-image:latest

docker push gcr.io/anilora-453406/anilora-image:latest

gcloud run deploy your-service-name \
  --image gcr.io/anilora-453406/anilora-image:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated

gcloud run services list --platform managed --region us-central1
