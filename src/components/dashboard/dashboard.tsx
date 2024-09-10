// STYLES
import { Box } from '@chakra-ui/react'

// COMPONENTS
import { Projects } from '@components/projects/projects'
import { Tasks } from '@components/tasks/tasks'

// APOLLO
import { GET_PROJECTS } from '../../querys/querys'
import { useQuery } from '@apollo/client'

const statuses = ['In Progress', 'Not Started', 'Completed']

export const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error}`

  return (
    <Box m={10}>
      <Projects projects={data.projects} statuses={statuses} />
      <Tasks projects={data.projects} statuses={statuses} />
    </Box>
  )
}
