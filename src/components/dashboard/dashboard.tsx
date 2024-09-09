'use client'

import { useState, useEffect } from 'react'

import { fetchData, fetchTest } from '@querys/api'

// STYLES
import { Box } from '@chakra-ui/react'

// COMPONENTS
import { Projects } from '@components/projects/projects'
import { Tasks } from '@components/tasks/tasks'

// DATA

export const Dashboard = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData().then((data) => console.log(data))
  }, [])

  console.log('data')
  console.log(data)

  return (
    <Box m={10}>
      <h1>Dashboard</h1>
      <Projects projects={data} statuses={data} />
      <Tasks projects={data} statuses={data} />
    </Box>
  )
}
