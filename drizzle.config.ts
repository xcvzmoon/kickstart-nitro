import { defineConfig } from 'drizzle-kit';
import { dbOptions } from 'server/database';

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: dbOptions,
  schema: './server/database/schemas/*.ts',
  out: './server/database/migrations',
  casing: 'snake_case',
  verbose: true,
  strict: true,
});
