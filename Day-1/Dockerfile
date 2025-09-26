# BASE Image
FROM ubuntu:latest (last pushed 1 week ago)

# 
RUN apt-get update
RUN apt install -y curl
RUN curl -sl https://deb.modesouce.com/setup_22.x -o /tmp/nodesource_setup.sh 
RUN bash /tmp/nodesource_setup.sh
RUN apt install -y nodejs

COPY index.js /home/app/index.js
COPY package.json /home/app/package.json
COPY package-lock-json /home/app/package-lock.json