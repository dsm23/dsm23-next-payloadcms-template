FROM node:22.9.0-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN pnpm install
RUN pnpm build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY package*.json  ./
COPY pnpm.lock ./

RUN pnpm install --frozen-lockfile

EXPOSE 3000

CMD ["node", "dist/server.js"]
