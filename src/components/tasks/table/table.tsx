import { useRef, useEffect, useState } from 'react'

// STYLES
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Progress,
  Button,
  Flex,
  Icon,
  Radio,
  RadioGroup,
  Stack,
  Badge,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

// TYPES
import { TaskType } from '../../../types/task'
import { ProjectType } from '../../../types/project'

// HANDLERS
import { handleFilter } from '@handlers/handleFilter'

// COMPONENTS
import { SelectStatus } from '@components/selectStatus/selectStatus'
import { SelectProject } from '@components/selectProjects/selectProjects'

export const TaskTable = ({
  projects,
  statuses,
}: {
  projects: ProjectType[]
  statuses: string[]
}) => {
  const [value, setValue] = useState('')

  const tasks = [
    {
      id: 1,
      name: 'Задача 1',
      status: 'в процессе',
      progress: 50,
      projects: ['Проект 1', 'Проект 2'],
    },
    {
      id: 2,
      name: 'Задача 2',
      status: 'выполнено',
      progress: 100,
      projects: ['Проект 3'],
    },
    // ...
  ]

  return (
    <Table variant='striped' colorScheme='blue'>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Название задачи</Th>
          <Th>Статус выполнения</Th>
          <Th>Прогресс</Th>
          <Th>Проекты</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {tasks.map((task) => (
          <Tr key={task.id}>
            <Td>
              <Checkbox />
            </Td>
            <Td>{task.name}</Td>
            <Td>
              <SelectStatus
                size='xs'
                project={projects[0]}
                statuses={statuses}
              />
            </Td>
            <Td>
              <Progress value={task.progress} borderRadius='md' />
            </Td>
            <Td>
              <SelectProject projects={projects} />
            </Td>
            <Td>
              <Flex>
                <Button variant='link' colorScheme='blue' size='sm'>
                  <Icon as={EditIcon} />
                </Button>
                <Button variant='link' colorScheme='red' size='sm'>
                  <Icon as={DeleteIcon} />
                </Button>
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
