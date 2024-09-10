export interface ProjectType {
  id: number
  title?: string
  description?: string
  status?: string
  due_date?: Date
  image?: string
  owner_id: number
  share_id?: number[]
  task_ids: number[]
}
