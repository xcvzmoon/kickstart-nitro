import { SQL } from 'bun';
import { drizzle } from 'drizzle-orm/bun-sql';
import { EnhancedQueryLogger } from 'drizzle-query-logger';
import { dbOptionsSchema } from 'server/types/zod-schemas/db-options';

export const dbOptions = dbOptionsSchema.parse({
  host: Bun.env.NITRO_DB_HOST,
  port: Bun.env.NITRO_DB_PORT,
  database: Bun.env.NITRO_DB_DATABASE,
  user: Bun.env.NITRO_DB_USER,
  password: Bun.env.NITRO_DB_PASSWORD,
  tls: Bun.env.NITRO_DB_SSL,
});

export const db = drizzle({
  client: new SQL(dbOptions),
  logger: new EnhancedQueryLogger(),
});
