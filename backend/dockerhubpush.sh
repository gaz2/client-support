#!/bin/bash
docker system prune
docker build -t gaz2/express-api:latest .
docker push gaz2/express-api:latest
$SHELL
