// STYLES
import { ChakraProvider, Container } from '@chakra-ui/react'

// COMPONENTS
import { Dashboard } from '@components/dashboard/dashboard'

export default function Home() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  )
}
