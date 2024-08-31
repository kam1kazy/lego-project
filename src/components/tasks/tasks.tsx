import { useState, useEffect } from 'react'

// STYLES
import {
  useDisclosure,
  ModalOverlay,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Heading,
} from '@chakra-ui/react'

// COMPONENTS
import { TaskTable } from './table/table'

// DATA

// TYPES
import { TaskType } from '../../types/task'
import { ProjectType } from '../../types/project'

export const Tasks = ({
  projects,
  statuses,
}: {
  projects: ProjectType[]
  statuses: string[]
}) => {
  // SET PROJECT

  // SET MODAL

  return (
    <>
      <Heading as='h2' size='xl' noOfLines={1} mb={5}>
        Tasks
      </Heading>

      <TaskTable statuses={statuses} projects={projects} />
    </>
  )
}
