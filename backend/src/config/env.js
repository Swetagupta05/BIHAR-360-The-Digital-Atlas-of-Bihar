import dotenv from 'dotenv';
import { z } from 'zod';

// Load environment variables from .env if present
dotenv.config();

/**
 * Strict Environment Variable Validation Schema
 */
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().int().positive().default(5000),
  DATABASE_URL: z
    .string()
    .min(1, 'DATABASE_URL is required')
    .default('postgresql://bihar360:bihar360@localhost:5432/bihar360'),
  FRONTEND_URL: z.string().url().default('http://localhost:5173')
});

/**
 * Validate process.env at startup. Fail fast if configuration is invalid.
 */
function validateEnv() {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    console.error('❌ FATAL: Invalid application environment configuration:');
    const errors = result.error.flatten().fieldErrors;
    for (const [key, msgs] of Object.entries(errors)) {
      console.error(`  - ${key}: ${(msgs ?? []).join(', ')}`);
    }
    process.exit(1);
  }

  return result.data;
}

export const env = validateEnv();
