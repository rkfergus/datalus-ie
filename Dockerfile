# Build stage (use glibc-based node so native optional deps match)
FROM node:18-bullseye-slim AS build
WORKDIR /app

# Copy package files (including package-lock.json) so npm ci is reproducible
COPY package*.json ./

# Install dependencies for this platform
RUN npm ci --prefer-offline --no-audit

# Copy application source and build
COPY . .
RUN npm run build

# Production stage: small nginx image serving built assets
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]