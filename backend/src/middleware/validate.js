import { ZodError } from 'zod';
import { AppError } from '../utils/response.js';

/**
 * Reusable Express boundary validation middleware using Zod
 */
export function validate(schemas) {
  return async (req, _res, next) => {
    try {
      if (schemas.params) {
        req.params = await schemas.params.parseAsync(req.params);
      }
      if (schemas.query) {
        req.query = await schemas.query.parseAsync(req.query);
      }
      if (schemas.body) {
        req.body = await schemas.body.parseAsync(req.body);
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const issues = error.issues || error.errors || [];
        const formattedErrors = issues.map((err) => ({
          field: err.path ? err.path.map(String).join('.') : '',
          message: err.message,
          code: String(err.code)
        }));

        next(
          new AppError(
            'Request validation failed',
            400,
            'VALIDATION_ERROR',
            formattedErrors
          )
        );
      } else {
        next(error);
      }
    }
  };
}
