import { useState, useEffect } from 'react'

// STYLES
import { Box } from '@chakra-ui/react'

// COMPONENTS
import { Projects } from '@components/projects/projects'
import { Tasks } from '@components/tasks/tasks'

// TYPE
import { ProjectType } from '../../types/project'

// APOLLO
import { GET_PROJECTS } from '../../querys/querys'
import { useQuery } from '@apollo/client'

const statuses = ['In Progress', 'Not Started', 'Completed']

export const Dashboard = () => {
  const [currentData, setCurrentData] = useState(null)
  const { loading, error, data } = useQuery(GET_PROJECTS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error}`

  return (
    <Box m={10}>
      <h1>Dashboard</h1>
      <Projects projects={data.projects} statuses={statuses} />
      <Tasks projects={data.projects} statuses={statuses} />
    </Box>
  )
}
