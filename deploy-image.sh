#!/bin/bash

# Build and push Docker image to VM
# Target: 192.168.20.139:/data/tantraback

VM_HOST="192.168.20.139"
VM_USER="root"
VM_PATH="/data/tantraback"
IMAGE_NAME="emailnotification-backend"
IMAGE_TAG="latest"
TAR_FILE="$IMAGE_NAME-$IMAGE_TAG.tar"

echo "=== Docker Image Deployment ==="
echo "Target VM: $VM_USER@$VM_HOST:$VM_PATH"
echo ""

# Step 1: Build Docker image locally
echo "Step 1: Building Docker image locally..."
cd packages/backend
docker build -t $IMAGE_NAME:$IMAGE_TAG .
if [ $? -ne 0 ]; then
  echo "Error building Docker image"
  exit 1
fi
echo "✓ Docker image built successfully"
echo ""

# Step 2: Save image to tar file
echo "Step 2: Saving Docker image to tar file..."
docker save -o ../$TAR_FILE $IMAGE_NAME:$IMAGE_TAG
if [ $? -ne 0 ]; then
  echo "Error saving Docker image"
  exit 1
fi
echo "✓ Image saved to $TAR_FILE"
echo ""

# Step 3: Create directory on VM
echo "Step 3: Creating directory on VM..."
ssh $VM_USER@$VM_HOST "mkdir -p $VM_PATH"
echo "✓ Directory created on VM"
echo ""

# Step 4: Copy tar file to VM
echo "Step 4: Copying Docker image to VM (this may take a few minutes)..."
scp ../$TAR_FILE $VM_USER@$VM_HOST:$VM_PATH/
if [ $? -ne 0 ]; then
  echo "Error copying file to VM"
  exit 1
fi
echo "✓ Docker image transferred to VM"
echo ""

# Step 5: Copy .env file to VM
echo "Step 5: Copying .env configuration to VM..."
scp .env $VM_USER@$VM_HOST:$VM_PATH/
echo "✓ .env file copied"
echo ""

# Step 6: Load image and run container on VM
echo "Step 6: Loading image and starting container on VM..."
ssh $VM_USER@$VM_HOST << EOF
cd $VM_PATH

# Load Docker image
echo "Loading Docker image..."
docker load -i $TAR_FILE

# Stop and remove existing container if running
echo "Stopping any existing containers..."
docker stop $IMAGE_NAME 2>/dev/null || true
docker rm $IMAGE_NAME 2>/dev/null || true

# Run new container
echo "Starting new container..."
docker run -d \
  --name $IMAGE_NAME \
  -p 4000:4000 \
  --env-file .env \
  --restart unless-stopped \
  $IMAGE_NAME:$IMAGE_TAG

# Show status
echo ""
echo "Container started. Checking status..."
sleep 2
docker ps | grep $IMAGE_NAME
docker logs $IMAGE_NAME | tail -10

echo ""
echo "✓ Deployment complete!"
EOF

# Step 7: Cleanup
echo ""
echo "Step 7: Cleaning up local tar file..."
rm ../$TAR_FILE
echo "✓ Cleanup complete"
echo ""

echo "=== Deployment Summary ==="
echo "Backend URL: http://$VM_HOST:4000"
echo "Container name: $IMAGE_NAME"
echo ""
echo "Useful commands on VM:"
echo "  docker ps                              - Show running containers"
echo "  docker logs $IMAGE_NAME -f             - View container logs"
echo "  docker stop $IMAGE_NAME                - Stop container"
echo "  docker start $IMAGE_NAME               - Start container"
echo "  docker restart $IMAGE_NAME             - Restart container"
