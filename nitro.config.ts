import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineNitroConfig } from 'nitropack/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNitroConfig({
  compatibilityDate: 'latest',
  srcDir: 'server',
  imports: false,
  alias: {
    server: resolve(__dirname, './server'),
  },
  runtimeConfig: {
    db: {
      host: '',
      port: 0,
      database: '',
      user: '',
      password: '',
      ssl: false,
    },
  },
  preset: 'bun',
});
