FROM node:21-alpine as build

RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run build

FROM node:21-alpine as deploy

RUN mkdir -p /app
WORKDIR /app
COPY --from=build /app/.output /app/.output

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

ENTRYPOINT ["node", ".output/server/index.mjs"]