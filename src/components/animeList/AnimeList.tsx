import { gql } from '@apollo/client'
import { Box, Flex, Text, Spinner, Grid, GridItem } from '@chakra-ui/react'
import { AnimeCard } from '../animeCard/AnimeCard'
import { PaginationList } from '@/components/pagination/Pagination'
import { useQuery } from '@/graphql/generated'

export const GET_ANIME_LIST = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME, sort: POPULARITY) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          medium
          color
        }
        description
        episodes
        averageScore
        genres
      }
    }
  }
`

export const AnimeList = ({ page }: { page: number }) => {
  const { loading, error, data } = useQuery(GET_ANIME_LIST, {
    variables: {
      page: page || 1,
      perPage: 30,
    },
  })

  if (loading) {
    return (
      <Flex justify="center">
        <Box>
          <Spinner />
        </Box>
      </Flex>
    )
  }

  if (error) {
    return (
      <Flex justify="center">
        <Box>
          <Text>That did not go to plan....</Text>
        </Box>
      </Flex>
    )
  }

  return (
    <Flex justify="center" direction="column">
      <Grid gap={8} templateColumns={['1fr', null, 'repeat(3, 1fr)']}>
        {data?.Page?.media &&
          data.Page!.media.map((i) => (
            <GridItem key={i?.id} colSpan={1}>
              <AnimeCard
                title={i?.title?.native || ''}
                description={i?.description || ''}
                image={i?.coverImage?.medium || ''}
              />
            </GridItem>
          ))}
      </Grid>
      <Flex justify="center" mt={8} mb={20}>
        <PaginationList page={page} lastPage={data?.Page?.pageInfo?.lastPage || 0} />
      </Flex>
    </Flex>
  )
}
