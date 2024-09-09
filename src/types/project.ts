export interface ProjectType {
  id: number
  title: string
  description?: string
  status?: string
  due_date?: string
  image?: string
  owner_id: number
  task_ids: number[]
}
