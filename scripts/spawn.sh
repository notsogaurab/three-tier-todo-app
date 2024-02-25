#!/bin/bash

# Script to spawn all the containers.  This script will build the images and run the containers.

# Create a network
docker network create todoapp_network


# Build the images for the database, backend and frontend
# database
docker build -t todo_database ../database

# backend
docker build -t todo_backend ../backend

# frontend
docker build -t todo_frontend ../frontend


# Run the containers for the database, backend and frontend
# database
docker run --name todo_database --network todoapp_network -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=root  -p 5435:5432 -d todo_database:latest

# backend
docker run --name todo_backend --network todoapp_network -p 3000:3000 -d todo_backend:latest

# frontend
docker run --name todo_frontend -p 5173:5173 -d todo_frontend:latest


# Show the status of the containers
echo "################################################"
echo "All containers are up and running"
echo "You can access the app at http://localhost:5173"