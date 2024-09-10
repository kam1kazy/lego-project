'use client'

import React from 'react'

// STYLES
import { ChakraProvider, Container } from '@chakra-ui/react'

// COMPONENTS
import { Dashboard } from '@components/dashboard/dashboard'

// APOLLO
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

const httpLink = createHttpLink({
  uri: '/api/graphql',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Dashboard />
      </ChakraProvider>
    </ApolloProvider>
  )
}
