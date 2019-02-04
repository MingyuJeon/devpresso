#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://MingyuJeon.github.io
#git push -f git@github.com:MingyuJeon/devPresso.github.io.git gh-pages

# if you are deploying to https://MingyuJeon.github.io/devPresso
git push -f git@github.com:MingyuJeon/devpresso.git master:gh-pages

cd -