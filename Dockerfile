# Docker 的多阶段构建，可以挺高二次部署的效率，不过首次部署非常耗时。
FROM harbor.byai-inc.com/saas-docker/alpine-node:3.15.0-v16.14.0 AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

# Rebuild the source code only when needed
FROM harbor.byai-inc.com/saas-docker/alpine-node:3.15.0-v16.14.0 AS builder
ARG K8S_OSS_KEY_ID
ENV K8S_OSS_KEY_ID=$K8S_OSS_KEY_ID

ARG K8S_OSS_KEY_SECRET
ENV K8S_OSS_KEY_SECRET=$K8S_OSS_KEY_SECRET

ARG API_ENV
ENV API_ENV=$API_ENV

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./ .
RUN yarn build

# Production image, copy all the files and run next
FROM harbor.byai-inc.com/saas-docker/alpine-node:3.15.0-v16.14.0 AS runner
WORKDIR /data

ENV NODE_ENV production

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/static ./static
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/config.env.js ./config.env.js
COPY --from=builder /app/pm2.production.config.js ./pm2.production.config.js
COPY --from=builder /app/.next ./.next

EXPOSE 6003

ENV source_map_support=false

# https://blog.poetries.top/2018/11/26/docker-pm2-deploy-node-proj/
# CMD ["pm2-runtime", "start", "/data/pm2.config.js"]
# https://yeasy.gitbook.io/docker_practice/image/dockerfile/entrypoint
ENTRYPOINT ["pm2-runtime", "start", "/data/pm2.production.config.js", "--env", "prod"]
