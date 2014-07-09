.PHONY: default archive test

default: test

test:

archive:
	tar --exclude='.git*' \
		--exclude='.sass-cache*' \
		--exclude='bower.json' \
		--exclude='.bowerrc' \
		--exclude='*.swp' \
		--exclude='Gemfile*' \
		--exclude='Makefile' \
		--transform 's,^\.,www,' -czvf heliosmusic.tgz .
