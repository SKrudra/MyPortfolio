# Create the node stage with the name "builder"
FROM node:latest as builder

# set the working directory
WORKDIR /app

# Copy files from current directory to the working directory
COPY . .

# Run the npm install and buld all assets
RUN npm i && npm run ng build

# Create the nginx stage for serving content
FROM nginx:alpine

# Set the working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=builder /app/dist/my-portfolio .

# Containers run nginx with gloabl directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]