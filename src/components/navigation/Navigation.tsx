import { Box, Flex, Container, Link as ChakraLink } from '@chakra-ui/react'
import { useUserData } from '@/hooks/useUserData'
import NextLink from 'next/link'

export const Navigation = () => {
  const { activeUser } = useUserData()

  return (
    <Container as="nav" mb={8}>
      <Flex justify="space-between" shrink="1">
        <Box py="4">
          <ChakraLink asChild fontWeight="semibold">
            <NextLink href="/">Leonardo.Ai Web Team Technical Challenge V3.4.1</NextLink>
          </ChakraLink>
        </Box>
        <Box py="4">
          {activeUser && (
            <ChakraLink asChild>
              <NextLink href={`/user/${activeUser.userId}`}>Edit User</NextLink>
            </ChakraLink>
          )}
        </Box>
      </Flex>
    </Container>
  )
}
