import { PrismaClient } from '@prisma/client'

// Типы
import { UserType } from '../../src/types/user'
import { ProjectType } from '../../src/types/project'
import { TaskType } from '../../src/types/task'
// import { ProjectTaskType } from '../../src/types/projectTask'

// Дата для примера
import { users, projects, tasks } from '../data/dataProjects'

const db = new PrismaClient()

const seed = async (
  users: UserType[],
  projects: ProjectType[],
  tasks: TaskType[]
) => {
  console.log(`🧻 Наполнение БД фиктивными данными...`)

  for (const user of users) {
    const createUser = await db.user.create({
      data: user,
    })
    console.log(`🟢 Пользователь с id: ${createUser.id} - успешно создан`)
  }

  for (const project of projects) {
    const createProject = await db.project.create({
      data: project,
    })

    console.log(`🟢 Проект с id: ${createProject.id} - успешно создана`)
  }

  for (const task of tasks) {
    const createTask = await db.task.create({
      data: task,
    })

    console.log(`🟢 Задача с id: ${createTask.id} - успешно создан`)
  }
}

seed(users, projects, tasks)
  .then(() => console.log('🚚 Данные были успешно загружены'))
  .catch((error) => {
    console.error('🚧 Данные не удалось загрузить данные', error)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
    console.log('🔌 База данных успешно отключена')
  })
