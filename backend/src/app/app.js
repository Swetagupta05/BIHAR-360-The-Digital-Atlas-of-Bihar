import express from 'express';
import cors from 'cors';
import { env } from '../config/env.js';
import { requestIdMiddleware } from '../middleware/requestId.js';
import { apiRouter } from './routes.js';
import { notFoundHandler } from '../middleware/notFound.js';
import { errorHandler } from '../middleware/errorHandler.js';
import { sendSuccess } from '../utils/response.js';

/**
 * Configure secure CORS policy
 */
const corsOptions = {
  origin: (origin, callback) => {
    // Allow server-to-server or non-browser tools (curl, postman, server-side tests)
    if (!origin) {
      return callback(null, true);
    }

    // Exact match for configured frontend URL
    if (origin === env.FRONTEND_URL) {
      return callback(null, true);
    }

    // In development mode, permit localhost origins (Vite on ports 5173, 3000, 4173)
    if (env.NODE_ENV === 'development') {
      const isLocalhost =
        /^http:\/\/localhost(:\d+)?$/.test(origin) ||
        /^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin);
      if (isLocalhost) {
        return callback(null, true);
      }
    }

    // Otherwise reject origin
    return callback(new Error(`CORS blocked for unauthorized origin: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID']
};

/**
 * Express Application Factory
 */
export function createApp() {
  const app = express();

  // 1. Request ID Attribution
  app.use(requestIdMiddleware);

  // 2. Cross-Origin Resource Sharing
  app.use(cors(corsOptions));

  // 3. Request Body Size Limiting (Security Baseline)
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));

  // 4. Root Welcome Route
  app.get('/', (_req, res) => {
    sendSuccess(res, {
      name: 'BIHAR 360 Atlas API',
      description: 'Modular Monolith REST Service for Bihar 360 Digital Atlas',
      version: '1.0.0',
      apiDocs: '/api/v1/health',
      environment: env.NODE_ENV
    });
  });

  // 5. Mount API Version 1
  app.use('/api/v1', apiRouter);

  // 6. 404 Catch-All
  app.use(notFoundHandler);

  // 7. Centralized Error Handler
  app.use(errorHandler);

  return app;
}
