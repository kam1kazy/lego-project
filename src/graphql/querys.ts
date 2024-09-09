export const typeDefinitions = /* GraphQL */ `
  type Project {
    id: ID!
    title: String!
    description: String
    status: String
    due_date: String
    image: String
    tasks: [Task!]!
    owner: User!
  }

  type Task {
    id: ID!
    title: String!
    description: String
    status: String
    due_date: String
    project: Project!
    assigned_to: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    projects: [Project!]!
    tasks: [Task!]!
  }

  type Query {
    projects: [Project!]!
    project(id: ID!): Project
    tasks: [Task!]!
    task(id: ID!): Task
    users: [User!]!
    user(id: ID!): User
  }

  # type Mutation {
  #   createProject(
  #     title: String!
  #     description: String
  #     status: String
  #     due_date: String
  #     image: String
  #   ): Project
  #   updateProject(
  #     id: ID!
  #     title: String
  #     description: String
  #     status: String
  #     due_date: String
  #     image: String
  #   ): Project
  #   deleteProject(id: ID!): Boolean

  #   createTask(
  #     title: String!
  #     description: String
  #     status: String
  #     due_date: String
  #     projectId: ID!
  #   ): Task
  #   updateTask(
  #     id: ID!
  #     title: String
  #     description: String
  #     status: String
  #     due_date: String
  #   ): Task
  #   deleteTask(id: ID!): Boolean

  #   createUser(name: String!, email: String!): User
  #   updateUser(id: ID!, name: String, email: String): User
  #   deleteUser(id: ID!): Boolean
  # }
`
