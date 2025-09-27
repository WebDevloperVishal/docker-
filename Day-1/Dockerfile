# BASE Image
FROM node:20.17.0-alpine3.19 

# Create app directory
WORKDIR /home/app

COPY package.json .

COPY Dockerfile Dockerfile

RUN npm install

COPY index.js index.js

EXPOSE 3001

# Run the application
CMD ["node", "index.js"]