import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app/app.js';

const app = createApp();

describe('Health Module Endpoints', () => {
  it('GET /api/v1/health should respond with structured health telemetry', async () => {
    const res = await request(app).get('/api/v1/health');

    // Status is 200 (healthy) when DB connected, or 503 (degraded) when DB not connected
    expect([200, 503]).toContain(res.status);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toBeDefined();
    expect(res.body.data.service).toBe('bihar360-backend');
    expect(res.body.data.version).toBe('1.0.0');
    expect(typeof res.body.data.uptimeSeconds).toBe('number');
    expect(res.body.data.database).toBeDefined();
    expect(['connected', 'disconnected']).toContain(res.body.data.database.status);
    expect(res.headers).toHaveProperty('x-request-id');
  });
});
