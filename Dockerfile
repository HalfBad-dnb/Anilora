# Build Stage (Frontend)
FROM --platform=linux/amd64 node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the frontend files and build the project
COPY frontend/ .
RUN npm run build

# Backend Build Stage
FROM --platform=linux/amd64 openjdk:17-jdk-slim AS backend-build

# Set working directory inside the container for the backend
WORKDIR /backend

# Copy the Spring Boot JAR file into the container
COPY /Users/deividasstropus/Desktop/geles/target/geles-0.0.1-SNAPSHOT.jar /backend/app.jar

# Nginx for Serving Frontend
FROM --platform=linux/amd64 nginx:alpine

# Copy the built frontend files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy images to the correct location in Nginx
COPY frontend/public/images /usr/share/nginx/html/images

# If you have a custom nginx config, use it
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx will run on (Frontend)
EXPOSE 8080

# Expose the port for the backend (Spring Boot)
EXPOSE 8081

# Run the Spring Boot app and Nginx in the background
CMD ["sh", "-c", "java -jar /backend/app.jar & nginx -g 'daemon off;'"]
