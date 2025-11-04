import { eventHandler } from 'h3';
import pino from 'pino-http';

export default eventHandler((event) => {
  const logger = pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  });

  logger(event.node.req, event.node.res);
});
