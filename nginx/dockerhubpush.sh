#!/bin/bash
docker system prune
docker build -t gaz2/nuxt3-docker-1 .
docker push gaz2/nuxt3-docker-1
$SHELL
