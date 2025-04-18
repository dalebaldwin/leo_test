import { Container, Text, Link } from '@chakra-ui/react'

export const Footer = () => (
  <Container as="footer" mb={16}>
    <Text>
      Demo project by <Link href="https://www.linkedin.com/in/dalebaldwin/">Dale Baldwin</Link>
    </Text>
  </Container>
)
