#!/bin/sh

echo "Installing dependencies..."

yarn config set "@fortawesome:registry" https://npm.fontawesome.com/
yarn config set "//npm.fontawesome.com/:_authToken" ${NPM_TOKEN}


if [[  "${APP_ENV}" == "production" ]]; then
  yarn install --non-interactive --frozen-lockfile --ignore-optional  # --production
  yarn build
else
  yarn install --non-interactive --frozen-lockfile --ignore-optional
fi

# yarn export
# yarn cache clean --force

