import { Avatar, Button, Card, Link as ChakraLink } from '@chakra-ui/react'
import { Prose } from '@/components/ui/prose'
import NextLink from 'next/link'

type Props = {
  animeId: number
  title: string
  description?: string
  image: string
  pageId: number
}

// I just lifted the card, it's simple but works for this use case
// Using url structure to drigger the detail modal
// This means you can link to an actual title

export const AnimeCard = ({ animeId, title, description, image, pageId }: Props) => {
  const detailBaseUrl = pageId !== 1 ? `/${pageId}?anime=${animeId}` : `/?anime=${animeId}`

  return (
    <Card.Root h="100%">
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src={image} />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2">{title}</Card.Title>
        {description ? (
          <Prose dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <Card.Description>No description provided</Card.Description>
        )}
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">
          <ChakraLink asChild>
            <NextLink href={detailBaseUrl}>View Anime</NextLink>
          </ChakraLink>
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}
