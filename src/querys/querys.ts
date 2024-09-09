import { gql } from '@elysiajs/apollo'

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      description
      status
      due_date
      image
    }
  }
`

export const GET_PROJECT = gql`
  query GetProject($id: Int!) {
    project(id: $id) {
      id
      title
      description
      status
      due_date
      image
    }
  }
`

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      description
      status
      due_date
    }
  }
`

export const GET_TASK = gql`
  query GetTask($id: Int!) {
    task(id: $id) {
      id
      title
      description
      status
      due_date
    }
  }
`

// export const CREATE_PROJECT = gql`
//   mutation CreateProject(
//     $title: String!
//     $description: String
//     $status: String
//     $due_date: String
//     $image: String
//   ) {
//     createProject(
//       title: $title
//       description: $description
//       status: $status
//       due_date: $due_date
//       image: $image
//     ) {
//       id
//       title
//       description
//       status
//       due_date
//       image
//     }
//   }
// `
