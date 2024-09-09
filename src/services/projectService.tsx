'use client'

import { api } from '@lib/api'
import { useEffect, useState } from 'react'

export const getProjects = async () => {
  const [dataProjects, setDataProjects] = useState('Loading...')
  const response = await api.get('/projects')

  useEffect(() => {
    getProjects().then((projects) => {
      console.log(projects)
    })
  }, [])

  return response.data
}
