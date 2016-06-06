#!/bin/bash

set -ex

npm run build
TARGET=/tmp/gh-pages
rm -rf $TARGET
mkdir $TARGET
cp -r dist/* $TARGET
pushd $TARGET
git init .
popd
cp .git/config $TARGET/.git/config
cd $TARGET
git checkout -b gh-pages
git add .
git commit -am '%'
git push -f origin gh-pages
