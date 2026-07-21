# Multi-stage build: each stage starts fresh and only carries forward what
# the next one needs, so the final image ships the app and nothing else.

# ---- Stage 1: install dependencies ----
FROM node:24-alpine AS deps
WORKDIR /app
# Copy only the dependency manifests first: as long as they don't change,
# Docker reuses this layer from cache and skips the slow npm ci on rebuilds.
COPY package.json package-lock.json ./
RUN npm ci

# ---- Stage 2: build the site ----
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Stage 3: minimal runtime ----
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Run as an unprivileged user, not root (same hardening logic as the VPS).
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# The standalone output bundles server.js + the few node_modules it needs.
# public/ and .next/static are not included by default and must be copied in.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000
# Bind to all interfaces so the port is reachable from outside the container.
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

CMD ["node", "server.js"]
