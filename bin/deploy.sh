#!/bin/sh
set -e

USER=helios21
HOST=heliosmusic.com
PROJECT=heliosmusic.tgz

echo "*************************"
echo "*     BEGIN DEPLOY      *"
echo "*************************"

scp $PROJECT $USER@$HOST:$PROJECT
ssh $USER@$HOST "tar xvf $PROJECT -C www \
  && rm $PROJECT \
  && chmod 755 -R www"

echo "**************************"
echo "*   SUCESS: DEPLOYED !!! *"
echo "**************************"

