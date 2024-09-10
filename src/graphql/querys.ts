export const typeDefinitions = /* GraphQL */ `
  type Project {
    id: ID!
    title: String
    description: String
    status: String
    create_date: Date
    image: String
    task_ids: number[]
    owner_id:  number
    shares_id: number[]
  }

  type Task {
    id: ID!
    title: String
    description: String
    status: String!
    create_date: Date
    project_id: number[]
    owner_id:  number
    shares_id: number[]
  }

  type User {
    id: ID!
    username: String!
    username: password!
    email: String
    owner_projects: number[]
    owner_tasks: number[]
    shares_projects: number[]
    shares_tasks: number[]
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
  #     create_date: String
  #     image: String
  #   ): Project
  #   updateProject(
  #     id: ID!
  #     title: String
  #     description: String
  #     status: String
  #     create_date: String
  #     image: String
  #   ): Project
  #   deleteProject(id: ID!): Boolean

  #   createTask(
  #     title: String!
  #     description: String
  #     status: String
  #     create_date: String
  #     projectId: ID!
  #   ): Task
  #   updateTask(
  #     id: ID!
  #     title: String
  #     description: String
  #     status: String
  #     create_date: String
  #   ): Task
  #   deleteTask(id: ID!): Boolean

  #   createUser(name: String!, email: String!): User
  #   updateUser(id: ID!, name: String, email: String): User
  #   deleteUser(id: ID!): Boolean
  # }
`
