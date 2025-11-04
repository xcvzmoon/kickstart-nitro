import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  compatibilityDate: 'latest',
  srcDir: 'server',
  imports: false,
  runtimeConfig: {
    db: {
      host: '',
      port: 0,
      database: '',
      username: '',
      password: '',
      ssl: false,
    },
  },
});
