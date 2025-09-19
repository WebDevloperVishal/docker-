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

$ docker image ls
REPOSITORY          TAG       IMAGE ID       CREATED        SIZE
redis/redis-stack   latest    b6567ad2e9c0   2 months ago   1.41GB


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

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker image purne -a
unknown shorthand flag: 'a' in -a

Usage:  docker image

Run 'docker image --help' for more information

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker image prune -a
WARNING! This will remove all images without at least one container associated to them.
Are you sure you want to continue? [y/N] yes

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker image prune -a
WARNING! This will remove all images without at least one container associated to them.
Are you sure you want to continue? [y/N] y
Deleted Images:
untagged: ubuntu:20.04
deleted: sha256:8feb4d8ca5354def3d8fce243717141ce31e2c428701f6682bd2fafe15388214
deleted: sha256:c664f8f86ed5a386b0a340d981b8f81714e21a8b9c73f658c4bea56aa179d54a

Total reclaimed space: 27.52MB

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker image ls
REPOSITORY          TAG       IMAGE ID       CREATED        SIZE
redis/redis-stack   latest    b6567ad2e9c0   2 months ago   1.41GB

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker pull nginx 
Using default tag: latest
latest: Pulling from library/nginx
cb497a329a81: Pull complete
f72106e86507: Pull complete
6c50e4e0c439: Pull complete
f1c4d397f477: Pull complete
d107e437f729: Pull complete
899c83fc198b: Pull complete
a785b80f5a67: Pull complete
Digest: sha256:d5f28ef21aabddd098f3dbc21fe5b7a7d7a184720bc07da0b6c9b9820e97f25e
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker run nginx
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2025/09/19 19:21:15 [notice] 1#1: using the "epoll" event method
2025/09/19 19:21:15 [notice] 1#1: nginx/1.29.1
2025/09/19 19:21:15 [notice] 1#1: built by gcc 12.2.0 (Debian 12.2.0-14+deb12u1)
2025/09/19 19:21:15 [notice] 1#1: OS: Linux 6.6.87.1-microsoft-standard-WSL2
2025/09/19 19:21:15 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2025/09/19 19:21:15 [notice] 1#1: start worker processes
2025/09/19 19:21:15 [notice] 1#1: start worker process 29
2025/09/19 19:21:15 [notice] 1#1: start worker process 30
2025/09/19 19:21:15 [notice] 1#1: start worker process 31
2025/09/19 19:21:15 [notice] 1#1: start worker process 32
2025/09/19 19:21:15 [notice] 1#1: start worker process 33
2025/09/19 19:21:15 [notice] 1#1: start worker process 34
2025/09/19 19:21:15 [notice] 1#1: start worker process 35
2025/09/19 19:21:15 [notice] 1#1: start worker process 36
2025/09/19 19:21:15 [notice] 1#1: start worker process 37
2025/09/19 19:21:15 [notice] 1#1: start worker process 38
2025/09/19 19:21:15 [notice] 1#1: start worker process 39
2025/09/19 19:21:15 [notice] 1#1: start worker process 40
2025/09/19 19:22:12 [notice] 1#1: signal 2 (SIGINT) received, exiting
2025/09/19 19:22:12 [notice] 30#30: exiting
2025/09/19 19:22:12 [notice] 35#35: exiting
2025/09/19 19:22:12 [notice] 33#33: exiting
2025/09/19 19:22:12 [notice] 32#32: exiting
2025/09/19 19:22:12 [notice] 33#33: exit
2025/09/19 19:22:12 [notice] 32#32: exit
2025/09/19 19:22:12 [notice] 36#36: exiting
2025/09/19 19:22:12 [notice] 36#36: exit
2025/09/19 19:22:12 [notice] 40#40: exiting
2025/09/19 19:22:12 [notice] 40#40: exit
2025/09/19 19:22:12 [notice] 29#29: exiting
2025/09/19 19:22:12 [notice] 29#29: exit
2025/09/19 19:22:12 [notice] 39#39: exiting
2025/09/19 19:22:12 [notice] 35#35: exit
2025/09/19 19:22:12 [notice] 39#39: exit
2025/09/19 19:22:12 [notice] 34#34: exiting
2025/09/19 19:22:12 [notice] 34#34: exit
2025/09/19 19:22:12 [notice] 30#30: exit
2025/09/19 19:22:12 [notice] 37#37: exiting
2025/09/19 19:22:12 [notice] 37#37: exit
2025/09/19 19:22:12 [notice] 38#38: exiting
2025/09/19 19:22:12 [notice] 38#38: exit
2025/09/19 19:22:12 [notice] 31#31: exiting
2025/09/19 19:22:12 [notice] 31#31: exit
2025/09/19 19:22:12 [notice] 1#1: signal 14 (SIGALRM) received
2025/09/19 19:22:12 [notice] 1#1: signal 17 (SIGCHLD) received from 40
2025/09/19 19:22:12 [notice] 1#1: worker process 40 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: signal 29 (SIGIO) received
2025/09/19 19:22:12 [notice] 1#1: signal 17 (SIGCHLD) received from 35
2025/09/19 19:22:12 [notice] 1#1: worker process 35 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: signal 29 (SIGIO) received
2025/09/19 19:22:12 [notice] 1#1: signal 17 (SIGCHLD) received from 38
2025/09/19 19:22:12 [notice] 1#1: worker process 30 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: worker process 36 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: worker process 37 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: worker process 38 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: worker process 39 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: signal 29 (SIGIO) received
2025/09/19 19:22:12 [notice] 1#1: signal 17 (SIGCHLD) received from 29
2025/09/19 19:22:12 [notice] 1#1: worker process 29 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: worker process 32 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: signal 29 (SIGIO) received
2025/09/19 19:22:12 [notice] 1#1: signal 17 (SIGCHLD) received from 34
2025/09/19 19:22:12 [notice] 1#1: worker process 31 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: worker process 34 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: signal 29 (SIGIO) received
2025/09/19 19:22:12 [notice] 1#1: signal 17 (SIGCHLD) received from 33
2025/09/19 19:22:12 [notice] 1#1: worker process 33 exited with code 0
2025/09/19 19:22:12 [notice] 1#1: exit

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker run ubuntu 
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
953cdd413371: Pull complete
Digest: sha256:353675e2a41babd526e2b837d7ec780c2a05bca0164f7ea5dbbd433d21d166fc
Status: Downloaded newer image for ubuntu:latest

vishal sanam@LAPTOP-GHS5GD2E MINGW64 ~/Downloads/Docker/Day-1 (main)
$ docker run ubuntu 

*/