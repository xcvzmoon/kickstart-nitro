import { z } from 'zod';

export const dbOptionsSchema = z.object({
  host: z.string(),
  port: z.coerce.number(),
  database: z.string(),
  user: z.string(),
  password: z.string(),
  tsl: z.transform((value) => value === 'true'),
});
