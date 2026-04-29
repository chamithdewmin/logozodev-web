FROM node:20-alpine

WORKDIR /app

RUN corepack enable

# Copy workspace manifests first for better layer caching.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY frontend/package.json frontend/package.json
COPY packages/shared/package.json packages/shared/package.json
COPY packages/ui/package.json packages/ui/package.json
COPY packages/config/package.json packages/config/package.json

RUN pnpm install --frozen-lockfile

# Copy the full monorepo so workspace package sources are available.
COPY . .

RUN pnpm --filter frontend build

EXPOSE 3000

CMD ["pnpm", "--filter", "frontend", "start"]
