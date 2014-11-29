MAKE = make
GULP = gulp
NPM = npm
SERVER = python -m SimpleHTTPServer

.PHONY: run watch


.bootstrap: gulpfile.js package.json
	$(NPM) install
	touch $@


run: .bootstrap
	$(GULP)
	$(SERVER)


watch: .bootstrap
	$(GULP) watch &
	$(SERVER) 
