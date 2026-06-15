# Stage 1: Build the React/Vite application
FROM node:22-alpine AS builder
# Upgrade OS packages to patch vulnerabilities in the alpine base image
RUN apk update && apk upgrade --no-cache
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the static application files using Nginx
FROM nginx:alpine
# Upgrade OS packages to patch vulnerabilities in the alpine base image
RUN apk update && apk upgrade --no-cache
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
