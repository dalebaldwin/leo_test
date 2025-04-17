import { Box, Flex, Container, Button, Text } from '@chakra-ui/react'

export const Navigation = () => {
  return (
    <Container as="nav">
      <Flex justify="space-between" shrink="1">
        <Box py="4">
          <Text fontWeight="semibold">Leonardo.Ai Web Team Technical Challenge V3.4.1</Text>
        </Box>
        <Box py="4">
          <Button>Sign In</Button>
        </Box>
      </Flex>
    </Container>
  )
}
