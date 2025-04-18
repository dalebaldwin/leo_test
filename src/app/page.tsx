'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { Gate } from '@/components/gate/Gate'
import { SignIn } from '@/components/signIn/SignIn'
import { Content } from '@/components/content/Content'
import { Flex, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Navigation />
      <Box as="main" flex="1">
        <Gate SignIn={SignIn} Content={Content} />
      </Box>
      <Footer />
    </Flex>
  )
}
