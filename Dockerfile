# Use a lightweight Nginx base image
FROM nginx:alpine

# Copy your HTML file into the Nginx web server's default directory
COPY index.html /usr/share/nginx/html/index.html
