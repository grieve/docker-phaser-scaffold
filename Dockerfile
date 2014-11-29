FROM debian:wheezy
MAINTAINER Ryan Grieve <me@ryangrieve.com>

RUN apt-get update --fix-missing
RUN apt-get upgrade -y

RUN apt-get install -y curl python make build-essential

RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get install -y nodejs

RUN npm install -g gulp

RUN groupadd -g 1000 docker
RUN useradd -u 1000 -r -g docker -d /home/docker -s /bin/bash -c "HTTP Server User" docker

RUN mkdir /home/docker
RUN chown -R docker:docker /home/docker


ENV HOME /home/docker
USER docker

WORKDIR /home/docker/app
EXPOSE 8000
