import { defineConfig } from 'drizzle-kit';
import { poolConfigSchema } from 'server/types/zod-schemas/pool-config';

const poolConfig = poolConfigSchema.parse({
  host: process.env.NITRO_DB_HOST,
  port: process.env.NITRO_DB_PORT,
  database: process.env.NITRO_DB_DATABASE,
  user: process.env.NITRO_DB_USER,
  password: process.env.NITRO_DB_PASSWORD,
  ssl: process.env.NITRO_DB_SSL,
});

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: poolConfig,
  schema: './server/database/schemas/*.ts',
  out: './server/database/migrations',
  casing: 'snake_case',
  verbose: true,
  strict: true,
});
