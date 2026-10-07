import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from '../config/env.js';
import * as schema from './schema/index.js';
import { logger } from '../utils/logger.js';

// Setup connection client with sane connection limits and connection timeouts
const queryClient = postgres(env.DATABASE_URL, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 1,
  backoff: () => 0,
  onnotice: () => {}
});

export const db = drizzle(queryClient, { schema });

/**
 * Lightweight database connectivity test for health checks.
 * Distinguishes between application running and database reachable.
 */
export async function checkDatabaseHealth() {
  const start = Date.now();
  try {
    // Run simple fast query with strict timeout
    await Promise.race([
      queryClient`SELECT 1 as health_check`,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Database query timed out')), 2000)
      )
    ]);

    return {
      connected: true,
      latencyMs: Date.now() - start
    };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    logger.warn('Database health check failed', undefined, { error: errorMsg });
    return {
      connected: false,
      latencyMs: Date.now() - start,
      error: errorMsg
    };
  }
}

/**
 * Cleanly close connection pool during graceful shutdown
 */
export async function closeDatabasePool() {
  try {
    logger.info('Closing PostgreSQL connection pool...');
    await queryClient.end({ timeout: 5 });
    logger.info('PostgreSQL connection pool closed.');
  } catch (err) {
    logger.error('Error closing database connection pool', undefined, { err });
  }
}
