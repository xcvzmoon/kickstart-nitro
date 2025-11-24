import { useRuntimeConfig } from 'nitropack/runtime';
import { poolConfigSchema } from 'server/types/zod-schemas/pool-config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { EnhancedQueryLogger } from 'drizzle-query-logger';

const runtimeConfig = useRuntimeConfig();
const poolConfig = poolConfigSchema.parse(runtimeConfig.db);

export const db = drizzle({
  client: new Pool(poolConfig),
  logger: new EnhancedQueryLogger(),
});
