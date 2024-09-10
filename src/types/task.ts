export type TaskType = {
  id: number
  title: string
  description?: string
  status?: string
  due_date?: Date
  project_id?: number[]
  user_id: number
  share_id?: number[]
}
