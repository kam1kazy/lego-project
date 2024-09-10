import { ProjectType } from './project'

export type UserType = {
  id: number
  username: string
  password: string
  email?: string
  owner_projects?: number[]
  owner_tasks?: number[]
  shares_projects?: number[]
  shares_tasks?: number[]
}
