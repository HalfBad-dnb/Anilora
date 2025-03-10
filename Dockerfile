# Build Stage
FROM node:18 AS build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Production Stage
FROM nginx:alpine
# Copy built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html
# Copy the images from the local folder to the container
COPY frontend/public/images /usr/share/nginx/html/images
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
