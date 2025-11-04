import * as z from 'zod';

import { useRuntimeConfig } from 'nitropack/runtime/config';

const poolConfigSchema = z.object({
  host: z.any().transform(String),
  port: z.any().transform(Number),
  database: z.any().transform(String),
  user: z.any().transform(String),
  password: z.any().transform(String),
  ssl: z.any().transform(Boolean),
});

const runtimeConfig = useRuntimeConfig();

export const poolConfig = poolConfigSchema.parse({
  host: runtimeConfig.db.host,
  port: runtimeConfig.db.port,
  database: runtimeConfig.db.database,
  user: runtimeConfig.db.username,
  password: runtimeConfig.db.password,
  ssl: runtimeConfig.db.ssl,
});
