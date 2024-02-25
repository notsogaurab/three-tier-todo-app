    # Used postgres:latest as base image
    FROM postgres:latest

    # Set the working directory
    COPY .env /app/db/.env

    # Copy the SQL file to the working directory
    COPY createdb.sql /docker-entrypoint-initdb.d/

    # Set the environment variables
    ENV POSTGRES_USER=${POSTGRES_USER}
    ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    ENV POSTGRES_DB=${POSTGRES_DB}

    # Start the development server
    EXPOSE 5432

