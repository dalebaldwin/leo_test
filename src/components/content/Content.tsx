import { Container, Text, Box } from '@chakra-ui/react'
import { useUserData } from '@/hooks/useUserData'

export const Content = () => {
  const { activeUser } = useUserData()

  return (
    <Container>
      <Text as="h1" textStyle="3xl">
        Content
      </Text>
      <Text>
        Hi {activeUser?.userName}, who is a {activeUser?.jobTitle}. You might be interested in the
        following content items.
      </Text>
      <Box></Box>
    </Container>
  )
}
