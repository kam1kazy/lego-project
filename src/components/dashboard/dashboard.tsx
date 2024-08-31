'use client'

import { useState, useEffect } from 'react'

// STYLES
import { Box } from '@chakra-ui/react'

// COMPONENTS
import { Projects } from '@components/projects/projects'
import { Tasks } from '@components/tasks/tasks'

// DATA
import { data } from '@data/dataProjects'

export const Dashboard = () => {
  // SET PROJECT
  const [projects, setProjects] = useState(data)
  const statuses = ['Not Started', 'In Progress', 'Done']

  useEffect(() => {
    setProjects(data)
  }, [data])

  // SET PROJECT

  // SET MODAL

  return (
    <Box m={10}>
      <Projects projects={projects} statuses={statuses} />
      <Tasks projects={projects} statuses={statuses} />
    </Box>
  )
}
