FROM node:12.16.2-alpine as builder

ARG NPM_TOKEN

WORKDIR /src

COPY package.json ./
COPY yarn.lock ./

RUN yarn config set "@fortawesome:registry" https://npm.fontawesome.com/
RUN yarn config set "//npm.fontawesome.com/:_authToken" $NPM_TOKEN
RUN yarn --non-interactive --frozen-lockfile

COPY . .

RUN yarn export

FROM nginx:stable-alpine
COPY --from=builder /src/out/ /usr/share/nginx/html
COPY --from=builder /src/nginx/default.conf /etc/nginx/conf.d/
