#!/usr/bin/sh

touch heliosmusic.tgz
tar --exclude='.git*' \
  --exclude='.sass-cache*' \
  --exclude='bower.json' \
  --exclude='.bowerrc' \
  --exclude='*.swp' \
  --exclude='Gemfile*' \
  --exclude='Makefile' \
  --exclude='heliosmusic.tgz' \
  -czvf heliosmusic.tgz .
