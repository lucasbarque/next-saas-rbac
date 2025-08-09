import type { FastifyInstance } from 'fastify'
import { UnauthorizedError } from '../routes/_errors/unauthorized-error'
import fastifyPlugin from 'fastify-plugin'

export const auth = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request, reply) => {
    request.getCurrentUserId = async () => {
      try {
        const { sub } = await request.jwtVerify<{ sub: string }>()

        return sub
      } catch (error) {
        throw new UnauthorizedError('Invalid auth token')
      }
    }

    const token = request.headers.authorization

    if (!token || token !== 'expected-token') {
      reply.status(401).send({ error: 'Unauthorized' })
    }
  })
})
