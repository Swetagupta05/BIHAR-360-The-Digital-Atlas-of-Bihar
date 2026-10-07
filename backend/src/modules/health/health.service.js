import { checkDatabaseHealth } from '../../db/client.js';

/**
 * Health Domain Service
 * Encapsulates system telemetry and resource connectivity inspection
 */
export async function getHealthStatus() {
  const dbHealth = await checkDatabaseHealth();
  const isHealthy = dbHealth.connected;

  return {
    status: isHealthy ? 'healthy' : 'degraded',
    service: 'bihar360-backend',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'development',
    database: {
      status: dbHealth.connected ? 'connected' : 'disconnected',
      ...(dbHealth.latencyMs !== undefined ? { latencyMs: dbHealth.latencyMs } : {}),
      ...(dbHealth.error ? { error: dbHealth.error } : {})
    }
  };
}
