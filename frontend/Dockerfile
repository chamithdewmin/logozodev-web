FROM node:20-alpine

WORKDIR /app

RUN corepack enable

# Frontend-only build (Dokploy context: frontend/)
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
