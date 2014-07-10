#!/usr/bin/sh

if [ "$(uname)" == "Darwin"];
then
  PREFIX=-s /^\./www/g
else
  PREFIX=--transform 's,^\.,www,'
fi


tar --exclude='.git*' \
  --exclude='.sass-cache*' \
  --exclude='bower.json' \
  --exclude='.bowerrc' \
  --exclude='*.swp' \
  --exclude='Gemfile*' \
  --exclude='Makefile' \
  --exclude='heliosmusic.tgz' \
  $PREFIX -czvf heliosmusic.tgz .
