FROM node:14.15.4 as base
WORKDIR /server
COPY . /server
RUN npm ci

FROM base as tested
RUN npm test

FROM tested as no_dev_deps
RUN npm run build
RUN npm ci --production

FROM node:14.15.4-alpine
COPY --from=no_dev_deps /server/dist /dist
COPY --from=no_dev_deps /server/node_modules /node_modules
EXPOSE 1357
CMD ["node", "dist/index.js"]

