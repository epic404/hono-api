import { Hono } from 'https://deno.land/x/hono@v3.11.11/mod.ts'
import initAuthRoutes from './auth/auth.routes.ts'

const app = new Hono()

initAuthRoutes(app)

Deno.serve(app.fetch)