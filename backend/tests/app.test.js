import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app/app.js';

const app = createApp();

describe('Application Core HTTP Infrastructure', () => {
  it('GET / should return service identity without sensitive data', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toBe('BIHAR 360 Atlas API');
    expect(res.body.data.version).toBe('1.0.0');
    expect(res.headers).toHaveProperty('x-request-id');
  });

  it('GET /unknown-path should return structured 404', async () => {
    const res = await request(app).get('/unknown-path');

    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe('RESOURCE_NOT_FOUND');
    expect(res.body.error.message).toContain('Cannot find resource');
  });

  it('should generate a new X-Request-ID if none is provided', async () => {
    const res = await request(app).get('/');

    expect(res.headers['x-request-id']).toBeDefined();
    expect(res.headers['x-request-id'].length).toBeGreaterThan(10);
  });

  it('should preserve and reflect client-provided X-Request-ID', async () => {
    const customId = 'client-uuid-987654321';
    const res = await request(app)
      .get('/')
      .set('x-request-id', customId);

    expect(res.headers['x-request-id']).toBe(customId);
  });

  it('POST /api/v1/health/echo should succeed with valid schema payload', async () => {
    const res = await request(app)
      .post('/api/v1/health/echo')
      .send({ message: 'Patna' });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.echoed).toBe('Patna');
  });

  it('POST /api/v1/health/echo should fail with 400 on invalid payload', async () => {
    const res = await request(app)
      .post('/api/v1/health/echo')
      .send({ message: '' });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
    expect(res.body.error.details).toBeInstanceOf(Array);
    expect(res.body.error.details[0].field).toBe('message');
  });
});
