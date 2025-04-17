import { Button, CloseButton, Dialog, Portal, Text, Box, Image, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { gql } from '@apollo/client'
import { useGetAnimeTitleQuery } from '@/generated'
import { Prose } from '@/components/ui/prose'

export const GET_ANIME_TITLE = gql`
  query GetAnimeTitle($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      duration
      description
      episodes
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      isAdult
      coverImage {
        extraLarge
        large
        medium
        color
      }
      countryOfOrigin
      volumes
    }
  }
`

export const AnimeDetail = ({ pageId, animeId }: { pageId?: number; animeId: number | null }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const { loading, error, data } = useGetAnimeTitleQuery({ variables: { id: animeId } })

  const onCloseUrl = pageId && pageId !== 1 ? `/${pageId}` : `/`

  console.log(animeId)

  useEffect(() => {
    if (animeId && !loading && !error && data) {
      setOpen(true)
    }
  }, [animeId, loading, error, data])

  const animeData = data?.Media

  return (
    <Dialog.Root
      lazyMount
      size="lg"
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      onExitComplete={() => router.push(onCloseUrl)}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            {animeData && (
              <>
                <Flex direction="column" justifyContent="center" alignItems="center">
                  {animeData.coverImage?.large && (
                    <Box mt={8}>
                      <Image
                        src={animeData.coverImage?.extraLarge}
                        alt={animeData.title?.native || ''}
                      />
                    </Box>
                  )}
                  <Box my={8} px={6}>
                    <Text textStyle="4xl">{animeData?.title?.native}</Text>
                  </Box>
                </Flex>
                <Dialog.Body>
                  <Box>
                    <Text mb={4} textStyle="lg">
                      Description
                    </Text>
                    {animeData.description ? (
                      <Prose dangerouslySetInnerHTML={{ __html: animeData.description }} />
                    ) : (
                      <Text>No description provided</Text>
                    )}
                  </Box>
                  <Box>
                    <Text my={4} textStyle="lg">
                      Anime Details
                    </Text>
                    <Flex>
                      <Text fontWeight="bold">Country of Origin</Text>
                      <Text ml="2">{animeData.countryOfOrigin}</Text>
                    </Flex>
                    <Flex>
                      <Text fontWeight="bold">Start Date</Text>
                      <Text ml="2">
                        {animeData.startDate?.month}/{animeData.startDate?.year}
                      </Text>
                    </Flex>
                    <Flex>
                      {animeData.endDate?.year && (
                        <>
                          <Text fontWeight="bold">End Date</Text>
                          <Text ml="2">
                            {animeData.endDate?.month}/{animeData.endDate?.year}
                          </Text>
                        </>
                      )}
                    </Flex>
                    {animeData.episodes && (
                      <Flex>
                        <Text fontWeight="bold">Episodes</Text>
                        <Text ml="2">{animeData.episodes}</Text>
                      </Flex>
                    )}
                    {animeData.volumes && (
                      <Flex>
                        <Text fontWeight="bold">Volumes</Text>
                        <Text ml="2">{animeData.volumes}</Text>
                      </Flex>
                    )}
                    <Flex>
                      <Text fontWeight="bold">Adult Content</Text>
                      <Text ml="2">
                        {animeData.isAdult ? 'Contains Adult Content' : 'Child Safe'}
                      </Text>
                    </Flex>
                  </Box>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline">Close</Button>
                  </Dialog.ActionTrigger>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
