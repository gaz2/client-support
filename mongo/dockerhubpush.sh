#!/bin/bash
docker system prune
docker build -t gaz2/mongo .
docker push gaz2/mongo
$SHELL
