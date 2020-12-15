#!/bin/bash

if [[ "$(docker images -q image-tools 2> /dev/null)" == "" ]]; then
  echo "Creating image-tools Docker image"
  docker build -t image-tools .
fi

docker run -it --rm -v `pwd`:`pwd` -w `pwd` image-tools inkscape --export-filename=./dr.png --export-dpi=200 --export-background-opacity=0 ./dr.svg
