#!/bin/bash

# Deployment script for EmailNotification Backend
# Target: 192.168.20.139:/data/tantraback

VM_HOST="192.168.20.139"
VM_USER="root"
VM_PATH="/data/tantraback"
PROJECT_NAME="emailnotification"

echo "Deploying to $VM_USER@$VM_HOST:$VM_PATH"

# Create directory on VM if it doesn't exist
ssh $VM_USER@$VM_HOST "mkdir -p $VM_PATH"

# Copy project files to VM
echo "Copying files to VM..."
rsync -avz --exclude 'node_modules' --exclude '.git' \
  ./packages/backend/ \
  ./docker-compose.yml \
  $VM_USER@$VM_HOST:$VM_PATH/

# Build and run Docker container on VM
echo "Building and starting Docker container on VM..."
ssh $VM_USER@$VM_HOST << 'EOF'
cd /data/tantraback
docker-compose down
docker-compose build --no-cache
docker-compose up -d
echo "Deployment complete!"
docker ps
EOF

echo "Backend deployed successfully at http://$VM_HOST:4000"
