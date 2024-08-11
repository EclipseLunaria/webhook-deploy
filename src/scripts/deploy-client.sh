#!/bin/bash

echo "Service Directory: $1"
if [ -z "$1" ]; then
  echo "Error: No service directory provided."
  echo "Usage: $0 /path/to/service-directory"
  exit 1
fi

SERVICE_DIR="$1"

echo "Deployment started: $(date)"

echo "Changing directory to $SERVICE_DIR"
cd "$SERVICE_DIR" || { echo "Error: Directory $SERVICE_DIR does not exist."; exit 1; }

echo "$(pwd)"

"$SERVICE_DIR"/deploy.sh