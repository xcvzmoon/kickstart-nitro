import { drizzle } from 'drizzle-orm/node-postgres';
import { EnhancedQueryLogger } from 'drizzle-query-logger';
import { useRuntimeConfig } from 'nitropack/runtime';
import { Pool } from 'pg';
import { poolConfigSchema } from 'server/types/zod-schemas/pool-config';

const runtimeConfig = useRuntimeConfig();
const poolConfig = poolConfigSchema.parse(runtimeConfig.db);

export const db = drizzle({
  client: new Pool(poolConfig),
  logger: new EnhancedQueryLogger(),
});
