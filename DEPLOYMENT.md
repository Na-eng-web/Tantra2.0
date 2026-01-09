# Deployment Guide

## Prerequisites

1. **SSH Access**: Ensure you can SSH into the VM as root
   ```bash
   ssh root@192.168.20.139
   ```

2. **Docker Installed on VM**: The VM must have Docker and Docker Compose installed

3. **Environment Variables**: Ensure `.env` file exists in `packages/backend/` with:
   - `BACKEND_PORT=4000`
   - `EMAIL_USER=your-email@gmail.com`
   - `EMAIL_PASS=your-app-password`
   - `MONGO_URI=your-mongodb-connection-string`

## Deployment Methods

### Method 1: Using Deployment Script (Automated)

1. Make the script executable:
   ```bash
   chmod +x deploy.sh
   ```

2. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

### Method 2: Manual Deployment

#### Step 1: Copy files to VM
```bash
# Create directory on VM
ssh root@192.168.20.139 "mkdir -p /data/tantraback"

# Copy backend files
scp -r packages/backend/* root@192.168.20.139:/data/tantraback/

# Copy docker-compose.yml (adjusted for single service)
scp docker-compose.yml root@192.168.20.139:/data/tantraback/
```

#### Step 2: SSH into VM and deploy
```bash
ssh root@192.168.20.139

cd /data/tantraback

# Build Docker image
docker-compose build --no-cache

# Run container in detached mode
docker-compose up -d

# Check if container is running
docker ps

# View logs
docker-compose logs -f
```

### Method 3: Using Docker Build and Push

1. **Build image locally:**
   ```bash
   cd packages/backend
   docker build -t emailnotification-backend:latest .
   ```

2. **Save image to tar file:**
   ```bash
   docker save -o emailnotification-backend.tar emailnotification-backend:latest
   ```

3. **Copy to VM:**
   ```bash
   scp emailnotification-backend.tar root@192.168.20.139:/data/tantraback/
   ```

4. **Load and run on VM:**
   ```bash
   ssh root@192.168.20.139
   cd /data/tantraback
   docker load -i emailnotification-backend.tar
   docker run -d -p 4000:4000 --env-file .env --name tantraback emailnotification-backend:latest
   ```

## Post-Deployment

### Check Status
```bash
ssh root@192.168.20.139 "docker ps"
```

### View Logs
```bash
ssh root@192.168.20.139 "cd /data/tantraback && docker-compose logs -f"
```

### Stop Container
```bash
ssh root@192.168.20.139 "cd /data/tantraback && docker-compose down"
```

### Restart Container
```bash
ssh root@192.168.20.139 "cd /data/tantraback && docker-compose restart"
```

## Accessing the Application

Once deployed, the backend will be accessible at:
```
http://192.168.20.139:4000
```

Test the endpoint:
```bash
curl -X POST http://192.168.20.139:4000/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "message": "Test message"
  }'
```

## Troubleshooting

### Container won't start
```bash
ssh root@192.168.20.139
cd /data/tantraback
docker-compose logs
```

### Check if port is already in use
```bash
ssh root@192.168.20.139 "netstat -tulpn | grep 4000"
```

### Rebuild from scratch
```bash
ssh root@192.168.20.139 "cd /data/tantraback && docker-compose down && docker system prune -f && docker-compose up --build -d"
```
