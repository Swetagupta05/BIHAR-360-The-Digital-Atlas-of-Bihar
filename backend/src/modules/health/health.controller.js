import { getHealthStatus } from './health.service.js';
import { sendSuccess } from '../../utils/response.js';

/**
 * Health Controller
 * Orchestrates HTTP interaction for API and infrastructure health probes
 */
export async function handleGetHealth(_req, res, next) {
  try {
    const health = await getHealthStatus();
    const statusCode = health.status === 'healthy' ? 200 : 503;
    sendSuccess(res, health, statusCode);
  } catch (err) {
    next(err);
  }
}
