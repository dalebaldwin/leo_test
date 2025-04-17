import { Container, Text, Separator } from '@chakra-ui/react'
import { useUserData } from '@/hooks/useUserData'
import { AnimeList } from '../animeList/AnimeList'

export const Content = () => {
  const { activeUser } = useUserData()

  return (
    <Container>
      <Text as="h1" textStyle="3xl">
        Content
      </Text>
      <Separator my={8} />
      <Text>
        Hi {activeUser?.userName}, who is a {activeUser?.jobTitle}. You might be interested in the
        following content items.
      </Text>
      <Separator my={8} />
      <AnimeList />
    </Container>
  )
}
