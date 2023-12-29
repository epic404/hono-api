import { generateToken, testAuth } from './auth.handlers.ts';

export default function initAuthRoutes(app) {
  app.post('/api/auth/generate-token', (ctx) => generateToken(ctx))
  app.get('/api/auth/test', (ctx) => testAuth(ctx))
}