#!/bin/bash

# Set variables
PROJECT_ID="anilora-453406"



docker ps --filter "name=buildx_buildkit_friendly_germain0"

docker ps -a --filter "name=buildx_buildkit_friendly_germain0"

docker rm buildx_buildkit_friendly_germain0

docker buildx create --name buildx_buildkit_friendly_germain0

docker buildx use buildx_buildkit_friendly_germain0

docker buildx inspect --bootstrap

docker buildx build --platform linux/amd64,linux/arm64 -t gcr.io/$PROJECT_ID/iot-device-simulator:latest .

docker push gcr.io/$PROJECT_ID/iot-device-simulator:latest

gcloud run deploy iot-device-simulator --image gcr.io/$PROJECT_ID/iot-device-simulator:latest --platform managed --region us-central1 --allow-unauthenticated

gcloud run services list --platform managed --region us-central1

gcloud run services describe iot-device-simulator --platform managed --region us-central1

gcloud run services update-traffic iot-device-simulator --platform managed --region us-central1 --to-latest











