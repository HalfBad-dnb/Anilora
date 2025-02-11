#!/bin/bash

# Stop execution if any command fails
set -e

# Clean and build the project
echo "Cleaning and building the project..."
mvn clean install

# Run the application
echo "Starting the Spring Boot application..."
mvn spring-boot:run
