.PHONY: default archive test deploy

default: test

test:

archive:
	bash ./bin/archive.sh

deploy: archive
	bash ./bin/deploy.sh
