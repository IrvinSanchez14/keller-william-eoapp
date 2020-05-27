FROM node:12.16.3-alpine as base

ARG APP_DIR=/workspace
ARG NODE_ENV=development
ARG NPM_TOKEN
ARG NODE_OPTIONS="--max-old-space-size=768"

ENV APP_DIR=${APP_DIR}
ENV NODE_ENV=${NODE_ENV}
ENV NODE_OPTIONS=${NODE_OPTIONS}
ENV PORT=3000
ENV PATH=${APP_DIR}/node_modules/.bin:${PATH}

RUN mkdir -p ${APP_DIR} && chown node -R  ${APP_DIR}

USER node

WORKDIR ${APP_DIR}

COPY --chown=node . .

RUN ci-cd/docker/install-deps.sh

EXPOSE 3000

ENTRYPOINT [ "ci-cd/docker/entrypoint.sh" ]

CMD [ "ci-cd/docker/start.sh" ]


