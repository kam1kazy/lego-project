import { ProjectType } from '../../src/types/project'
import { TaskType } from '../../src/types/task'
import { UserType } from '../../src/types/user'

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Project 1 description',
    status: 'In Progress',
    due_date: new Date('2023-03-01'),
    image: 'project1.jpg',
    owner_id: 1,
    task_ids: [1, 2],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Project 2 description',
    status: 'Completed',
    due_date: new Date('2022-12-31'),
    image: 'project2.jpg',
    owner_id: 2,
    task_ids: [3],
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Project 3 description',
    status: 'In Progress',
    due_date: new Date('2023-06-01'),
    image: 'project3.jpg',
    owner_id: 3,
    task_ids: [4],
  },
]

export const users: UserType[] = [
  {
    id: 1,
    username: 'Ivanov Ivan',
    password: '',
    email: 'ivanov.ivan@example.com',
    projects: [1, 2],
  },
  {
    id: 2,
    username: 'Petrov Petr',
    password: '',
    email: 'petrov.petr@example.com',
    projects: [1, 2],
  },
  {
    id: 3,
    username: 'Sidorov Sergey',
    password: '',
    email: 'sidorov.sergey@example.com',
    projects: [1, 2],
  },
]

export const tasks: TaskType[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Task 1 description',
    status: 'In Progress',
    due_date: new Date('2023-02-15'),
    project_id: [1],
    user_id: 1,
    share_id: [2, 3],
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Task 2 description',
    status: 'Completed',
    due_date: new Date('2022-11-30'),
    project_id: [1],
    user_id: 2,
    share_id: [1, 3],
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Task 3 description',
    status: 'In Progress',
    due_date: new Date('2023-03-15'),
    project_id: [2],
    user_id: 3,
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'Task 4 description',
    status: 'In Progress',
    due_date: new Date('2023-04-01'),
    project_id: [1],
    user_id: 1,
    share_id: [2, 3],
  },
]
