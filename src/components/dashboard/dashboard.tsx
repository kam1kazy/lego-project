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

export const Dashboard = () => {
  const [projectData, setProjectData] = useState(null)
  const { loading, error, data } = useQuery(GET_PROJECTS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error}`

  return (
    <Box m={10}>
      <h1>Dashboard</h1>

      {data.projects.map((project: ProjectType) => (
        <p key={project.id}>{project.title}</p>
      ))}
      {/* <Projects projects={data} statuses={data} /> */}
      {/* <Tasks projects={data} statuses={data} /> */}
    </Box>
  )
}
