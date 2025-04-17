import { gql } from '@apollo/client'
import { Box, Flex, Text, Spinner, Grid, GridItem } from '@chakra-ui/react'
import { AnimeCard } from '../animeCard/AnimeCard'
import { PaginationList } from '@/components/pagination/Pagination'
import { useGetAnimeListQuery } from '@/generated'

export const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        perPage
      }
      media(type: ANIME, sort: POPULARITY) {
        id
        title {
          english
          native
        }
        coverImage {
          medium
          color
        }
        description
      }
    }
  }
`

export const AnimeList = ({ page }: { page: number }) => {
  const perPage = 30
  // The hardset value can get moved to a config later, might be fun to put it in the user object
  // could be a setting available to a user

  const { loading, error, data } = useGetAnimeListQuery({
    variables: {
      page,
      perPage,
    },
    fetchPolicy: 'no-cache',
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
                animeId={i?.id || 0}
                title={i?.title?.native || ''}
                description={i?.description || ''}
                image={i?.coverImage?.medium || ''}
                page={page}
              />
            </GridItem>
          ))}
      </Grid>
      <Flex justify="center" mt={8} mb={20}>
        <PaginationList
          currentPage={page}
          total={data?.Page?.pageInfo?.total || 0}
          perPage={perPage}
        />
      </Flex>
    </Flex>
  )
}
