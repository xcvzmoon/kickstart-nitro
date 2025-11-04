import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { poolConfig } from 'server/config/database';
import { EnhancedQueryLogger } from 'drizzle-query-logger';

export const db = drizzle({
  client: new Pool(poolConfig),
  logger: new EnhancedQueryLogger(),
});
