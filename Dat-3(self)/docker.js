/*
PS C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)> docker ps 
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
PS C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)> docker ps -a
CONTAINER ID   IMAGE             COMMAND                  CREATED      STATUS                  PORTS     NAMES
ebb52fba338a   postgres:latest   "docker-entrypoint.s…"   7 days ago   Exited (0) 2 days ago             leetcode-backend-api-db-1
PS C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)> docker images or docker image ls
PS C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)> docker image ls 
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
postgres     latest    1ffc019dae94   2 weeks ago   643MB
PS C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)> docker logs ebb52fba338a 
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.
PS C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)> docker run -d -p 8080:80 --name my-app-nginx nginx
Unable to find image 'nginx:latest' locally
PS C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)> docker run -it ubuntu bash
Unable to find image 'ubuntu:latest' locally
C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
5545b08f9d26: Pull complete
a0a6ab141558: Pull complete
0e86847a3920: Pull complete
35fb9ffa6621: Pull complete
1bace2083289: Pull complete
89df300a082a: Pull complete
Digest: sha256:f547e3d0d5d02f7009737b284abc87d808e4252b42dceea361811e9fc606287f
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>docker run -d --name test-container nginx
7ac0f7c723bcd246986b6494350b0954d7dfe2dccd8fb55dbe60a5ae7d82a766

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
7ac0f7c723bc   nginx     "/docker-entrypoint.…"   19 seconds ago   Up 18 seconds   80/tcp    test-container

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>doker iamges
'doker' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
nginx        latest    f547e3d0d5d0   4 days ago    225MB
postgres     latest    1ffc019dae94   2 weeks ago   643MB

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>docker rmi -f nginx
Untagged: nginx:latest

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
7ac0f7c723bc   f547e3d0d5d0   "/docker-entrypoint.…"   2 minutes ago   Up 2 minutes   80/tcp    test-container

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
<none>       <none>    f547e3d0d5d0   4 days ago    225MB
postgres     latest    1ffc019dae94   2 weeks ago   643MB

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>doker rm 7ac0f7c723bc
'doker' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>docker rm 7ac0f7c723bc
Error response from daemon: cannot remove container "7ac0f7c723bc": container is running: stop the container before removing or force remove

C:\Users\vishal sanam\Downloads\Docker\Dat-3(self)>docker rm -f 7ac0f7c723bc
7ac0f7c723bc

PS C:\Users\vishal sanam> docker ps -a
CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS                  PORTS                                     NAMES
4e88109868f9   nginx             "/docker-entrypoint.…"   13 minutes ago   Up 13 minutes           0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   my-app-nginx
ebb52fba338a   postgres:latest   "docker-entrypoint.s…"   7 days ago       Exited (0) 2 days ago                                             leetcode-backend-api-db-1
PS C:\Users\vishal sanam> docker iamge -a
unknown shorthand flag: 'a' in -a

Usage:  docker [OPTIONS] COMMAND [ARG...]

Run 'docker --help' for more information
PS C:\Users\vishal sanam> docker image -a
unknown shorthand flag: 'a' in -a

Usage:  docker image

Run 'docker image --help' for more information
PS C:\Users\vishal sanam> docker image
Usage:  docker image COMMAND

Manage images

Commands:
  build       Build an image from a Dockerfile
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Display detailed information on one or more images
  load        Load an image from a tar archive or STDIN
  ls          List images
  prune       Remove unused images
  pull        Download an image from a registry
  push        Upload an image to a registry
  rm          Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE

Run 'docker image COMMAND --help' for more information on a command.
PS C:\Users\vishal sanam> docker image ls
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
nginx        latest    f547e3d0d5d0   4 days ago    225MB
postgres     latest    1ffc019dae94   2 weeks ago   643MB
PS C:\Users\vishal sanam> docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
postgres     latest    1ffc019dae94   2 weeks ago   643MB
PS C:\Users\vishal sanam> docker ps -a
CONTAINER ID   IMAGE             COMMAND                  CREATED         STATUS                  PORTS     NAMES
7ac0f7c723bc   f547e3d0d5d0      "/docker-entrypoint.…"   3 minutes ago   Up 3 minutes            80/tcp    test-container
ebb52fba338a   postgres:latest   "docker-entrypoint.s…"   7 days ago      Exited (0) 2 days ago             leetcode-backend-api-db-1
PS C:\Users\vishal sanam> docker ps -a
CONTAINER ID   IMAGE             COMMAND                  CREATED      STATUS                  PORTS     NAMES
ebb52fba338a   postgres:latest   "docker-entrypoint.s…"   7 days ago   Exited (0) 2 days ago             leetcode-backend-api-db-1


PS C:\Users\vishal sanam> docker rmi sha256:66460d557b25769b102175144d538d88219c077c678a49af4afca6fbfc1b5252
Error response from daemon: conflict: unable to delete 66460d557b25 (cannot be forced) - image is being used by running container a61e1ee6ebfa
PS C:\Users\vishal sanam> docker rmi -f ubuntu
Untagged: ubuntu:latest
PS C:\Users\vishal sanam> docker rmi -f sha256:66460d557b25769b102175144d538d88219c077c678a49af4afca6fbfc1b5252
Error response from daemon: conflict: unable to delete 66460d557b25 (cannot be forced) - image is being used by running container a61e1ee6ebfa
PS C:\Users\vishal sanam> docker rmi -f sha256:66460d557b25769b102175144d538d88219c077c678a49af4afca6fbfc1b5252
Deleted: sha256:66460d557b25769b102175144d538d88219c077c678a49af4afca6fbfc1b5252
PS C:\Users\vishal sanam> docker rmi f547e3d0d5d0
Untagged: nginx:latest
Deleted: sha256:f547e3d0d5d02f7009737b284abc87d808e4252b42dceea361811e9fc606287f

PS C:\Users\vishal sanam> docker rm -f a61e1ee6ebfa7c21d92a19a3dffe6c3da8529e1579d8f1cb397112439a24e8a8
a61e1ee6ebfa7c21d92a19a3dffe6c3da8529e1579d8f1cb397112439a24e8a8
PS C:\Users\vishal sanam> docker rm f03bec498a3a3cb0baaa3ddc55a720d6b9eee4154876898f81abb5cb1c39fb00
Error response from daemon: cannot remove container "f03bec498a3a3cb0baaa3ddc55a720d6b9eee4154876898f81abb5cb1c39fb00": container is running: stop the container before removing or force remove
PS C:\Users\vishal sanam> docker rm -f f03bec498a3a3cb0baaa3ddc55a720d6b9eee4154876898f81abb5cb1c39fb00
f03bec498a3a3cb0baaa3ddc55a720d6b9eee4154876898f81abb5cb1c39fb00
PS C:\Users\vishal sanam> docker rm -f 4e88109868f9
4e88109868f9
*/