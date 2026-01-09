# Docker Deployment Guide

## Quick Start

### Build and Run with Docker Compose
```bash
docker-compose up -d
```

### Or build and run manually
```bash
# Build the image
docker build -t trantra:latest .

# Run the container
docker run -d -p 80:80 --name trantra-app trantra:latest
```

## Optimizations Included

### Multi-Stage Build
- **Stage 1 (Builder)**: Compiles the application using Node.js
- **Stage 2 (Production)**: Serves static files with Nginx alpine (minimal footprint)

### Security
- ✅ Non-root user execution
- ✅ Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- ✅ Minimal attack surface with alpine base
- ✅ No unnecessary packages

### Performance
- ✅ Gzip compression enabled
- ✅ Static asset caching (1 year for immutable assets)
- ✅ SPA routing fallback
- ✅ Health check endpoint at `/health`

### Size Optimization
- ✅ Multi-stage build reduces final image size
- ✅ Alpine Linux base (~5MB vs ~100MB+)
- ✅ Only production assets copied to final image
- ✅ Comprehensive `.dockerignore` to exclude unnecessary files

## Production Commands

### Build for production
```bash
docker build -t trantra:production --target production .
```

### View logs
```bash
docker logs trantra-app
```

### Stop and remove
```bash
docker-compose down
```

### Check health
```bash
curl http://localhost/health
```

## Image Size Comparison
- **Before optimization**: ~500-800MB (Node.js + dependencies)
- **After optimization**: ~25-35MB (Nginx alpine + static assets)

## Environment Variables
To pass environment variables during build:
```bash
docker build --build-arg VITE_API_URL=https://api.example.com -t trantra:latest .
```

## Production Deployment Tips
1. Use a reverse proxy (Nginx/Traefik) for SSL termination
2. Set up log aggregation (ELK, Datadog, etc.)
3. Use container orchestration (Kubernetes, Docker Swarm) for scaling
4. Implement CI/CD pipeline for automated builds
5. Use Docker registry (Docker Hub, AWS ECR, Google GCR) for image storage
