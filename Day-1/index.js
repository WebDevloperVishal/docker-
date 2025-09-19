const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Wold!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

/*
vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker rmi ubuntu 
Error response from daemon: No such image: ubuntu:latest

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker rmi ubuntu 20.04
Error response from daemon: No such image: ubuntu:latest
Error response from daemon: No such image: 20.04:latest

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker rmi ubuntu:20.04
Untagged: ubuntu:20.04
Deleted: sha256:8feb4d8ca5354def3d8fce243717141ce31e2c428701f6682bd2fafe15388214

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker pull ubuntu:20.04
20.04: Pulling from library/ubuntu
13b7e930469f: Pull complete
Digest: sha256:8feb4d8ca5354def3d8fce243717141ce31e2c428701f6682bd2fafe15388214
Status: Downloaded newer image for ubuntu:20.04
docker.io/library/ubuntu:20.04

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker search nginx 
NAME                                     DESCRIPTION                                     STARS     OFFICIAL
nginx                                    Official build of Nginx.                        20977     [OK]
nginx/nginx-ingress                      NGINX and  NGINX Plus Ingress Controllers fo…   110
nginx/nginx-prometheus-exporter          NGINX Prometheus Exporter for NGINX and NGIN…   50
nginx/unit                               This repository is retired, use the Docker o…   66
nginx/nginx-ingress-operator             NGINX Ingress Operator for NGINX and NGINX P…   2
nginx/docker-extension                                                                   0
nginx/nginx-quic-qns                     NGINX QUIC interop                              1
nginx/nginxaas-loadbalancer-kubernetes                                                   1
nginx/unit-preview                       Unit preview features                           0
bitnami/nginx                            Bitnami container image for NGINX               200
ubuntu/nginx                             Nginx, a high-performance reverse proxy & we…   133
bitnamicharts/nginx                      Bitnami Helm chart for NGINX Open Source        1
kasmweb/nginx                            An Nginx image based off nginx:alpine and in…   8
rancher/nginx                                                                            2
linuxserver/nginx                        An Nginx container, brought to you by LinuxS…   231
dtagdevsec/nginx                         T-Pot Nginx                                     0
paketobuildpacks/nginx                                                                   0
vmware/nginx                                                                             3
chainguard/nginx                         Build, ship and run secure software with Cha…   4
gluufederation/nginx                      A customized NGINX image containing a consu…   1
antrea/nginx                             Nginx server used for Antrea e2e testing        0
intel/nginx                                                                              0
circleci/nginx                           This image is for internal use                  2
docksal/nginx                            Nginx service image for Docksal                 1
corpusops/nginx                          https://github.com/corpusops/docker-images/     1

Deleting Image

$ docker image prune -a
WARNING! This will remove all images without at least one container associated to them.
Are you sure you want to continue? [y/N] y
Deleted Images:
untagged: ubuntu:20.04
deleted: sha256:8feb4d8ca5354def3d8fce243717141ce31e2c428701f6682bd2fafe15388214
deleted: sha256:c664f8f86ed5a386b0a340d981b8f81714e21a8b9c73f658c4bea56aa179d54a
*/