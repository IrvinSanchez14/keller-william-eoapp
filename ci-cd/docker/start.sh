#!/bin/sh

echo "----APP ENV----"
echo ${APP_ENV}

if [[  "${APP_ENV}" == "production" ]]; then
  yarn start
else
  yarn dev
fi