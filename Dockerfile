# Build stage (use glibc-based node so native optional deps match)
FROM node:18-bullseye-slim AS build
WORKDIR /app

# Set npm config to force rebuild native modules for Linux
ENV npm_config_target_platform=linux
ENV npm_config_target_arch=x64
ENV npm_config_target_libc=glibc

# Copy package files (including package-lock.json) so npm ci is reproducible
COPY package*.json ./

# Force clean install to ensure correct platform binaries
RUN rm -rf node_modules package-lock.json && \
    npm cache clean --force && \
    npm install --prefer-offline --no-audit --force

# Copy application source and build
COPY . .
RUN npm run build

# Production stage: small nginx image serving built assets
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]