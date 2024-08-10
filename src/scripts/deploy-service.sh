#!/bin/bash
echo "Service Directory: $1"
if [ -z "$1" ]; then
  echo "Error: No service directory provided."
  echo "Usage: $0 /path/to/service-directory"
  exit 1
fi


SERVICE_DIR="$1"

echo "API Deployment started: $(date)"

echo "Changing directory to $SERVICE_DIR"
cd "$SERVICE_DIR" || { echo "Error: Directory $SERVICE_DIR does not exist."; exit 1; }

echo "Fetching Latest Updates"
# Pull latest changes
git fetch origin main
git reset --hard origin/main
git submodule init
git submodule update
#Install dependencies
npm install

# Run tests (To be implemented)
# npm test

pm2 start pm2.config.js
echo "API Deployment completed: $(date)"