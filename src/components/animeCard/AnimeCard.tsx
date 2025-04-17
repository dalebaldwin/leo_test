import { Avatar, Button, Card, Text } from '@chakra-ui/react'
import { Prose } from '@/components/ui/prose'

type Props = {
  title: string
  description?: string
  image: string
}

export const AnimeCard = ({ title, description, image }: Props) => {
  return (
    <Card.Root h="100%">
      <Card.Body gap="2">
        <Avatar.Root size="lg" shape="rounded">
          <Avatar.Image src={image} />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title mt="2">{title}</Card.Title>
        <Card.Description>
          {description ? (
            <Prose dangerouslySetInnerHTML={{ __html: description }} />
          ) : (
            <Text>No description provided</Text>
          )}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
      </Card.Footer>
    </Card.Root>
  )
}
