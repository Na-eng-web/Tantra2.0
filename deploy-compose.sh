#!/bin/bash

# Deploy using Docker Compose and .env file
# Target: 192.168.20.139:/data/tantraback

VM_HOST="192.168.20.139"
VM_USER="root"
VM_PATH="/data/tantraback"
IMAGE_NAME="emailnotification-backend"
IMAGE_TAG="latest"
TAR_FILE="$IMAGE_NAME-$IMAGE_TAG.tar"

echo "=== Docker Compose Deployment ==="
echo "Target VM: $VM_USER@$VM_HOST:$VM_PATH"
echo ""

# Step 1: Build Docker image locally
echo "Step 1: Building Docker image..."
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

# Step 4: Copy files to VM
echo "Step 4: Copying Docker image, docker-compose.yml, and .env to VM..."
scp ../$TAR_FILE $VM_USER@$VM_HOST:$VM_PATH/
scp ../docker-compose.yml $VM_USER@$VM_HOST:$VM_PATH/
scp .env $VM_USER@$VM_HOST:$VM_PATH/
echo "✓ All files copied to VM"
echo ""

# Step 5: Load image and start with docker-compose
echo "Step 5: Loading image and starting with docker-compose on VM..."
ssh $VM_USER@$VM_HOST << EOF
cd $VM_PATH

# Load Docker image
echo "Loading Docker image..."
docker load -i $TAR_FILE

# Stop and remove existing containers
echo "Stopping any existing containers..."
docker-compose down 2>/dev/null || true

# Start new container with docker-compose
echo "Starting container with docker-compose..."
docker-compose up -d

# Show status
echo ""
echo "Container status:"
docker-compose ps

echo ""
echo "Logs (last 10 lines):"
docker-compose logs | tail -10

echo ""
echo "✓ Deployment complete!"
EOF

# Step 6: Cleanup
echo ""
echo "Step 6: Cleaning up local tar file..."
rm ../$TAR_FILE
echo "✓ Cleanup complete"
echo ""

echo "=== Deployment Summary ==="
echo "Backend URL: http://$VM_HOST:4000"
echo "Location: $VM_PATH"
echo ""
echo "Files on VM:"
echo "  - docker-compose.yml"
echo "  - .env"
echo "  - Docker image (loaded)"
echo ""
echo "Useful commands on VM:"
echo "  docker-compose ps                      - Show container status"
echo "  docker-compose logs -f                 - View logs"
echo "  docker-compose restart                 - Restart container"
echo "  docker-compose down                    - Stop and remove container"
echo "  docker-compose up -d                   - Start container"
