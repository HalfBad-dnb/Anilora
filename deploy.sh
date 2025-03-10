#!/bin/bash

# Authenticate with Google Cloud (if not already done)
gcloud auth login

# Set your actual project ID (replace with your actual project ID if needed)
PROJECT_ID="anilora"  # Make sure this is your actual Google Cloud project ID
gcloud config set project $PROJECT_ID

# Build and submit your Docker image
gcloud builds submit --tag gcr.io/$PROJECT_ID/anilora-app .

# Deploy to Cloud Run
gcloud run deploy anilora-app --image gcr.io/$PROJECT_ID/anilora-app --platform managed --region us-central1 --allow-unauthenticated
