###################
#   Base Image    #
###################

FROM node:lts-alpine3.18@sha256:bf6c61feabc1a1bd565065016abe77fa378500ec75efa67f5b04e5e5c4d447cd AS base

ENV NODE_ENV "production"
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR "/flowui"

##################
#   Installer    #
##################

FROM base AS installer

COPY "package.json" "./package.json"
COPY "pnpm-lock.yaml" "./pnpm-lock.yaml"

RUN npm i -g pnpm@latest
RUN pnpm install --prod --frozen-lockfile

################
#   Builder    #
################

FROM base AS builder

COPY . .

COPY --from=installer "/flowui/node_modules" "./node_modules"

RUN ./node_modules/.bin/next build

###############
#   Runner    #
###############

FROM base AS runner

ENV PORT 3005

RUN addgroup --system --gid 1001 flowui
RUN adduser --system --uid 1001 flowui

USER flowui

COPY --from=builder "/flowui/public" "./public"
COPY --from=builder --chown=flowui:flowui "/flowui/.next/standalone" "./"
COPY --from=builder --chown=flowui:flowui "/flowui/.next/static" "./.next/static"

EXPOSE $PORT

CMD [ "node", "server.js" ]
