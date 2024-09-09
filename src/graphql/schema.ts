import { resolvers } from './resolvers'
import { typeDefinitions } from './querys'
import { createContext } from './context'

export const schema = {
  typeDefs: typeDefinitions,
  context: createContext,
  resolvers,
}
