# Used node:20-alpine as base image
FROM node:20-alpine as backend

# Set the working directory
WORKDIR /app/backend

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn.lock ./

# Install the dependencies
RUN yarn

# Install curl
RUN apk add --no-cache curl

# Copy the rest of the files to the working directory
COPY . .

# Start the development server
EXPOSE 3000

# Define two commands to be executed when the container starts
CMD [ "sh", "-c", "yarn migrate; yarn start" ]