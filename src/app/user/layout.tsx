'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { Container } from '@chakra-ui/react'

export default function UserId({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <Container as="main"></Container>
      {children}
      <Footer />
    </>
  )
}
