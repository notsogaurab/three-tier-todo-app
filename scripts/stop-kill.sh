#!/bin/bash

# Script to kill all the containers.  This script will stop and remove all the containers.

# Stop the containers
docker stop todo_database todo_backend todo_frontend

# Remove the containers
docker rm todo_database todo_backend todo_frontend

# Remove the network
docker network remove todoapp_network

# Show the status of the containers
echo "################################################"
echo "All containers are stopped and removed"