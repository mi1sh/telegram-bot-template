# THIS DOCKERFILE USING FOR DEPLOY TO FLY.IO
# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.12.2
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

WORKDIR /app

ENV NODE_ENV="production"

FROM base as build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

COPY package-lock.json package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM base

COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "start"]
