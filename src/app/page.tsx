import { ChakraProvider, Container } from '@chakra-ui/react'
import { Dashboard } from '@components/dashboard/dashboard'

export default function Home() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  )
}
