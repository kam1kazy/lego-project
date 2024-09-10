export interface ProjectType {
  id: number
  title?: string
  description?: string
  status?: string
  due_date?: Date
  image?: string
  task_ids: number[]
  owner_id: number
  shares_id?: number[]
}
