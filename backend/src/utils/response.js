/**
 * Standard Operational Application Error
 */
export class AppError extends Error {
  /**
   * @param {string} message
   * @param {number} [statusCode=500]
   * @param {string} [code='INTERNAL_ERROR']
   * @param {unknown} [details]
   */
  constructor(message, statusCode = 500, code = 'INTERNAL_ERROR', details) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Standardized Success Response Envelope
 */
export function sendSuccess(res, data, statusCode = 200, meta) {
  return res.status(statusCode).json({
    success: true,
    data,
    ...(meta ? { meta } : {})
  });
}

/**
 * Standardized Error Response Envelope
 */
export function sendError(res, message, statusCode = 500, code = 'ERROR', details, stack) {
  return res.status(statusCode).json({
    success: false,
    error: {
      message,
      code,
      ...(details !== undefined ? { details } : {}),
      ...(stack ? { stack } : {})
    }
  });
}
