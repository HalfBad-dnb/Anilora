!#/bin/bash


# Authenticate with Google Cloud (if not already done)
gcloud auth list
gcloud config get-value project

# Set your project if needed
gcloud config set project anilora

# Try pushing to Container Registry
docker push gcr.io/anilora/anilora:latest