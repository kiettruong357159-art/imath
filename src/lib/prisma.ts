import { PrismaClient } from '@prisma/client';
import fs from 'node:fs';
import path from 'node:path';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function resolveDatabaseUrl(): string | undefined {
  if (process.env.VERCEL === '1') {
    const tmpDbPath = '/tmp/dev.db';
    const bundledDbPath = path.join(process.cwd(), 'prisma', 'dev.db');
    try {
      if (!fs.existsSync(tmpDbPath) && fs.existsSync(bundledDbPath)) {
        fs.copyFileSync(bundledDbPath, tmpDbPath);
      }
      if (fs.existsSync(tmpDbPath)) {
        return `file:${tmpDbPath}`;
      }
    } catch {
      // Fallback to bundled read-only path if /tmp copy fails
    }
    if (fs.existsSync(bundledDbPath)) {
      return `file:${bundledDbPath}`;
    }
  }
  return process.env.DATABASE_URL;
}

const dbUrl = resolveDatabaseUrl();

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    ...(dbUrl ? { datasources: { db: { url: dbUrl } } } : {}),
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
