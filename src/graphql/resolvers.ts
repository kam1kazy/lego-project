import { GraphQLContext } from '../context/context'
import { ProjectType } from '../types/project'
import { TaskType } from '../types/task'
import { UserType } from '../types/user'

export const resolvers = {
  Query: {
    projects: (_parent: unknown, _args: unknown, context: GraphQLContext) => {
      return context.prisma.project.findMany()
    },
    project: (
      _parent: unknown,
      _args: ProjectType,
      context: GraphQLContext
    ) => {
      const { id } = _args
      return context.prisma.project.findUnique({ where: { id } })
    },
    tasks: (_parent: unknown, _args: unknown, context: GraphQLContext) => {
      return context.prisma.task.findMany()
    },
    task: (_parent: unknown, _args: TaskType, context: GraphQLContext) => {
      const { id } = _args
      return context.prisma.task.findUnique({ where: { id } })
    },
    users: (_parent: unknown, _args: unknown, context: GraphQLContext) => {
      return context.prisma.user.findMany()
    },
    user: (_parent: unknown, _args: UserType, context: GraphQLContext) => {
      const { id } = _args
      return context.prisma.user.findUnique({ where: { id } })
    },
  },
}
