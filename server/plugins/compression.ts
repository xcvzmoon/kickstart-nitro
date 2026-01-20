import { getRequestHeader } from 'h3';
import { useCompression } from 'h3-compression';
import { defineNitroPlugin } from 'nitropack/runtime';

export default defineNitroPlugin((app) => {
  app.hooks.hook('render:response', async (response, { event }) => {
    if (getRequestHeader(event, 'content-type')?.startsWith('text/html')) return;
    await useCompression(event, response);
  });
});
