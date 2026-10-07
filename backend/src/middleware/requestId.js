import crypto from 'crypto';

/**
 * Request ID middleware
 * Preserves existing X-Request-ID or creates a new cryptographically secure UUID.
 */
export function requestIdMiddleware(req, res, next) {
  const existingId = req.header('x-request-id');
  const reqId = existingId && existingId.trim() !== '' ? existingId : crypto.randomUUID();

  req.id = reqId;
  res.setHeader('X-Request-ID', reqId);

  next();
}
