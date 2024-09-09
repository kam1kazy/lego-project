import { gql } from '@elysiajs/apollo'

import { treaty } from '@elysiajs/eden'
import { App } from '@server/route'

import { print } from 'graphql'
import { GET_PROJECTS } from './querys'

const client = treaty<App>('localhost:3000')

export const fetchData = async () => {
  const queryStr = print(GET_PROJECTS)

  try {
    const { data } = await client.api.graphql.post({
      query: queryStr,
    })

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

export const fetchTest = async () => {
  const { data } = await client.api.test.get()

  return data
}
