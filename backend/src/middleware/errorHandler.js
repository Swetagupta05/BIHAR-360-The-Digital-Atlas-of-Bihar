import { AppError, sendError } from '../utils/response.js';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

/**
 * Centralized Global Express Error Handling Middleware
 * Ensures uniform JSON format and protects sensitive internals in production.
 */
export function errorHandler(err, req, res, _next) {
  const isAppError = err instanceof AppError;
  const statusCode = isAppError ? err.statusCode : 500;
  const errorCode = isAppError ? err.code : 'INTERNAL_SERVER_ERROR';
  const message = isAppError
    ? err.message
    : env.NODE_ENV === 'production'
      ? 'An unexpected internal error occurred'
      : err.message;
  const details = isAppError ? err.details : undefined;

  // Log error with request ID
  logger.error(err.message, req.id, {
    method: req.method,
    path: req.originalUrl,
    statusCode,
    errorCode,
    stack: err.stack
  });

  const stack = env.NODE_ENV === 'development' ? err.stack : undefined;

  sendError(res, message, statusCode, errorCode, details, stack);
}
