import { Container, Text, Separator } from '@chakra-ui/react'
import { useUserData } from '@/hooks/useUserData'
import { AnimeList } from '@/components/animeList/AnimeList'
import { AnimeDetail } from '@/components/animeDetail/AnimeDetail'
import { useSearchParams } from 'next/navigation'

export const Content = ({ pageId }: { pageId?: number }) => {
  const { activeUser } = useUserData()
  const searchParams = useSearchParams()
  const animeId = searchParams.get('anime')

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
      <AnimeList pageId={pageId || 1} />
      <AnimeDetail animeId={Number(animeId)} pageId={pageId} />
    </Container>
  )
}
