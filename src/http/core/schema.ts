import { FastifySchema } from 'fastify'
import { RouteGenericInterface } from 'fastify/types/route'
import { Static } from '../../common/schema'

export type Maybe<T, P> = [T] extends [never] ? P : T

export type RouteSchema = FastifySchema | undefined
export type RouteSchemaInterface<S extends RouteSchema> =
  S extends FastifySchema
    ? {
        Params: Maybe<Static<S['params']>, unknown>
        Querystring: Maybe<Static<S['querystring']>, unknown>
        Body: Maybe<Static<S['body']>, unknown>
        Headers: Maybe<Static<S['headers']>, unknown>
        Reply: Maybe<Static<S['response']>, unknown>
      }
    : RouteGenericInterface
