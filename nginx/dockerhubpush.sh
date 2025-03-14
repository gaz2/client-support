#!/bin/bash
docker system prune
docker build -t gaz2/nginx .
docker push gaz2/nginx
$SHELL
