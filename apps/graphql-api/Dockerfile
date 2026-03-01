FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY pnpm-workspace.yaml .
COPY package.json .
COPY pnpm-lock.yaml .

COPY apps/graphql-api/package.json apps/graphql-api/
COPY libs/shared/utils-env/package.json libs/shared/utils-env/
COPY libs/shared/utils-tsconfig/package.json libs/shared/utils-tsconfig/
COPY libs/shared/provider-graphql/package.json libs/shared/provider-graphql/

FROM base AS deps
RUN pnpm install --frozen-lockfile --prod --filter @heewon.dev/graphql-api

FROM base AS builder
RUN pnpm install --frozen-lockfile --filter @heewon.dev/graphql-api

COPY apps/graphql-api apps/graphql-api
COPY libs libs

RUN pnpm --filter @heewon.dev/graphql-api build

FROM node:22-slim AS runner
WORKDIR /app

COPY --from=builder /app/apps/graphql-api/dist ./dist
COPY --from=builder /app/apps/graphql-api/schema.graphql .
COPY --from=deps /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 4000

CMD ["node", "dist/main.js"]
