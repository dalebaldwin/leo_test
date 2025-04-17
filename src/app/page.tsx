'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { Container } from '@chakra-ui/react'
import { Gate } from '@/components/gate/Gate'
import { SignIn } from '@/components/signIn/SignIn'
import { Content } from '@/components/content/Content'

export default function Home() {
  return (
    <>
      <Navigation />
      <Container as="main">
        <Gate SignIn={SignIn} Content={Content} />
      </Container>
      <Footer />
    </>
  )
}
