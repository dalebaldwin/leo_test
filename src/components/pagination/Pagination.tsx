import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { useRouter } from 'next/navigation'

type PaginationListProps = {
  currentPage: number
  total: number
  perPage: number
}

export const PaginationList = ({ currentPage, total, perPage }: PaginationListProps) => {
  const router = useRouter()

  // the gql source data seems to be contantly being updated so the total count
  // will likely be wrong and continue to grow as you go through the data.

  return (
    <Pagination.Root
      count={total}
      pageSize={perPage}
      page={currentPage}
      onPageChange={(details) => router.push(`/${details.page}`)}
    >
      <ButtonGroup variant="ghost" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>{page.value}</IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}
