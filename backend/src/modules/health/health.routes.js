import { Router } from 'express';
import { z } from 'zod';
import { handleGetHealth } from './health.controller.js';
import { validate } from '../../middleware/validate.js';
import { sendSuccess } from '../../utils/response.js';

export const healthRouter = Router();

// Root health probe
healthRouter.get('/', handleGetHealth);

// Sample validated endpoint to verify Zod validation middleware contracts
const echoSchema = {
  body: z.object({
    message: z.string().min(1, 'Message must not be empty').max(256)
  })
};

healthRouter.post('/echo', validate(echoSchema), (req, res) => {
  sendSuccess(res, { echoed: req.body.message });
});
