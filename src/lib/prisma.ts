import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

// Type for Cloudflare environment bindings
interface CloudflareEnv {
  DB: D1Database;
}

// For local development (SQLite file)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Local development: use SQLite file
function getLocalPrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  return globalForPrisma.prisma;
}

// Production (Cloudflare): use D1 adapter
function getD1Prisma(db: D1Database): PrismaClient {
  const adapter = new PrismaD1(db);
  return new PrismaClient({ adapter });
}

// Export function to get Prisma client based on environment
export function getPrisma(env?: CloudflareEnv): PrismaClient {
  if (env?.DB) {
    return getD1Prisma(env.DB);
  }
  return getLocalPrisma();
}

// For backwards compatibility (local dev)
export const prisma = getLocalPrisma();
