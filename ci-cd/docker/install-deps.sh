#!/bin/sh

echo "Installing dependencies..."

yarn config set "@fortawesome:registry" https://npm.fontawesome.com/
yarn config set "//npm.fontawesome.com/:_authToken" $NPM_TOKEN


if [[  "${NODE_ENV}" == "production" ]]; then
  yarn install --non-interactive --frozen-lockfile --ignore-optional --production
  yarn export
else
  yarn install --non-interactive --frozen-lockfile --ignore-optional
fi

# yarn cache clean --force

