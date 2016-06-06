#!/bin/bash

set -ex

npm run build

CWD=$(pwd)
TARGET="/tmp/gh-pages"

rm -rf $TARGET
mkdir $TARGET
cd $TARGET
git init .
cp $CWD/.git/config $TARGET/.git/config
git pull origin master
rm -rf *
cp -r $CWD/dist/* $TARGET

git add .
git commit -am '%'
git push -f origin master
