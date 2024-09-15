FROM oven/bun

WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
WORKDIR /app
COPY . .


RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]
