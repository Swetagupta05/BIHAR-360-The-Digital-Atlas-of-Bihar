import { AppError } from '../utils/response.js';

/**
 * 404 Catch-All Middleware for unmapped routes
 */
export function notFoundHandler(req, _res, next) {
  const error = new AppError(
    `Cannot find resource: ${req.method} ${req.originalUrl}`,
    404,
    'RESOURCE_NOT_FOUND'
  );
  next(error);
}
