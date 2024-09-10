export type TaskType = {
  id: number
  title?: string
  description?: string
  status: string
  create_date: Date
  project_id?: number[]
  owner_id: number
  shares_id?: number[]
}
