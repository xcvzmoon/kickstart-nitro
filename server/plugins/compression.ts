import { defineNitroPlugin } from 'nitropack/runtime';
import { useCompression } from 'h3-compression';

export default defineNitroPlugin((plugin) => {
  plugin.hooks.hook('beforeResponse', async (event, response) => {
    if (!response.body || event.node.res.hasHeader('content-encoding')) return;
    await useCompression(event, response);
  });
});
