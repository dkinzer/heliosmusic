.PHONY: default test init build update watch compile archive deploy

default: test

test:

build: update compile archive

init:
	bundle install
	bower install

archive:
	bash ./bin/archive.sh

update:
	bower update
	bundle update

watch:
	sass --watch scss/

compile:
	sass --update scss/

deploy: compile archive
	bash ./bin/deploy.sh
