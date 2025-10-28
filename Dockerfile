# syntax=docker/dockerfile:1.6
# Build stage
FROM node:18-bullseye-slim AS build

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Use cache mount like your working Flask Dockerfile + clean install
RUN --mount=type=cache,target=/root/.npm \
    rm -rf node_modules package-lock.json && \
    npm cache clean --force && \
    npm install

# Copy source and build
COPY . .
RUN npm run build

# Production stage: small nginx image serving built assets
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]