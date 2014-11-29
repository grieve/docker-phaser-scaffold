MAKE = make
DOCKER = docker
IMAGE_NAME = phaser-scaffold
CONTAINER_NAME = $(IMAGE_NAME)-run

RUN_PARAMS = -ti --rm
PORTS = -p 0.0.0.0:8000:8000
VOLUMES = -v $(CURDIR)/src:/home/docker/app 
DOCKER_RUN = $(DOCKER) run \
			 $(RUN_PARAMS) \
			 $(PORTS) \
			 $(VOLUMES) \
			 --name $(CONTAINER_NAME) \
			 $(IMAGE_NAME)


# BUILD COMMANDS

.build: Dockerfile
	$(DOCKER) build -t $(IMAGE_NAME) .
	touch $@

rebuild: 
	-rm .build
	$(MAKE) .build

force-rebuild:
	-$(DOCKER) kill $(CONTAINER_NAME)
	-$(DOCKER) rm $(CONTAINER_NAME)
	-$(DOCKER) rmi $(IMAGE_NAME)


# RUN COMMANDS

run: .build
	$(DOCKER_RUN) make run

watch: .build
	$(DOCKER_RUN) make watch


# UTIL COMMANDS

clean:
	-rm -rf src/dist

shell: .build
	$(DOCKER_RUN) bash
