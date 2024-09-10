// SERVER
import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'

// GRAPHQL
import { apollo } from '@elysiajs/apollo'
import { schema } from '@graphql/schema'

const app = new Elysia({ prefix: '/api' })
  .use(cors())
  .use(swagger())
  .use(apollo(schema))

export type App = typeof app

export const GET = app.handle
export const POST = app.handle
export const PUT = app.handle
export const PATCH = app.handle
export const DELETE = app.handle
