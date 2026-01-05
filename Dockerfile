# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine
# Copy the build output from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# IMPORTANT: Copy a custom Nginx config to handle React Router paths
# We will create this nginx.conf file in the next step
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]