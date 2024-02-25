# Base image: node:20-alpine
FROM node:20-alpine as frontend

# Set the working directory
WORKDIR /app/frontend

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn.lock ./

# Install the dependencies
RUN yarn

# Copy the rest of the files to the working directory
COPY . .

# Start the development server
EXPOSE 5173

# CMD ["yarn", "dev"]
CMD ["yarn", "dev", "--host", "0.0.0.0"]