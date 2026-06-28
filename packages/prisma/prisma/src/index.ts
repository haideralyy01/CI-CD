import { config } from "dotenv";
import { resolve } from "path";

// Load .env from the monorepo root — works whether CWD is the root or an app directory
config({
  path: [
    resolve(process.cwd(), ".env"),
    resolve(process.cwd(), "../../.env"),
  ],
});
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

export const prismaClient = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});