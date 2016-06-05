#!/bin/bash

set -ex

git add .
git commit --allow-empty -m 'deploy'
npm run build
git branch -D gh-pages
git checkout -b gh-pages
ls | grep -v dist | xargs rm -rf
mv dist/* .
rmdir dist
git commit -am '%'
git push -f origin gh-pages
git checkout master
