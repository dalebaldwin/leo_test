'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { Container, Flex } from '@chakra-ui/react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minH="100vh">
      <Navigation />
      <Container as="main" flex="1">
        {children}
      </Container>
      <Footer />
    </Flex>
  )
}
