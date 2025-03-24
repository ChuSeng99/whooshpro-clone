# Use Node.js as the base image
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy the built files to Nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
