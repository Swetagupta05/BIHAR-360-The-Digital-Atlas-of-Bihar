import { createApp } from './app/app.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';
import { closeDatabasePool } from './db/client.js';

const app = createApp();

const server = app.listen(env.PORT, () => {
  logger.info(`🏛️ BIHAR 360 Atlas Backend listening on port ${env.PORT}`, undefined, {
    environment: env.NODE_ENV,
    url: `http://localhost:${env.PORT}`,
    api: `http://localhost:${env.PORT}/api/v1/health`
  });
});

/**
 * Graceful Shutdown Handler
 */
let isShuttingDown = false;

async function handleShutdown(signal) {
  if (isShuttingDown) return;
  isShuttingDown = true;

  logger.info(`Received ${signal}. Starting graceful shutdown...`);

  // Force close after 10 seconds if graceful exit hangs
  const forceExitTimeout = setTimeout(() => {
    logger.error('Graceful shutdown timed out. Forcing process exit.');
    process.exit(1);
  }, 10000);
  forceExitTimeout.unref();

  // 1. Stop accepting new HTTP connections
  server.close(async (err) => {
    if (err) {
      logger.error('Error closing HTTP server', undefined, { err });
      process.exit(1);
    }

    logger.info('HTTP server closed successfully.');

    // 2. Disconnect database pool
    try {
      await closeDatabasePool();
      logger.info('All resources released. Process exiting cleanly.');
      process.exit(0);
    } catch (dbErr) {
      logger.error('Error closing database during shutdown', undefined, { dbErr });
      process.exit(1);
    }
  });
}

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
