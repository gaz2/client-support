FROM node:lts AS build-stage

WORKDIR /nuxtapp

COPY . .

RUN npm install

RUN npm run build

RUN rm -rf node_modules && \
  NODE_ENV=production npm install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts AS prod-stage

WORKDIR /nuxtapp

COPY --from=build-stage /nuxtapp/.output/  ./.output/

CMD [ "node", ".output/server/index.mjs" ]
