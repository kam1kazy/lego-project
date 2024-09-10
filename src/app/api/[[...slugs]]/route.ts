// SERVER
import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'

// GRAPHQL
import { schema } from '@graphql/schema'
import { apollo } from '@elysiajs/apollo'

const app = new Elysia({ prefix: '/api' })
  .use(cors())
  .use(swagger())
  .use(apollo(schema))
  .get('/test', () => 'get test - ok')

export type App = typeof app

export const GET = app.handle
export const POST = app.handle
