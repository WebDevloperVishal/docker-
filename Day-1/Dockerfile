# BASE Image
FROM ubuntu:latest

# Install Node.js
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get install -y nodejs

# Create app directory
WORKDIR /home/app

# Copy package files first (for better Docker layer caching)
COPY package.json /home/app/package.json
COPY package-lock.json /home/app/package-lock.json

# Install dependencies
RUN npm install

# Copy source code
COPY index.js /home/app/index.js

# Expose port (adjust as needed)
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]