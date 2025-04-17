import { Box, Flex, Container, Text, Link as ChakraLink } from '@chakra-ui/react'
import { useUserData } from '@/hooks/useUserData'
import NextLink from 'next/link'

export const Navigation = () => {
  const { activeUser } = useUserData()

  return (
    <Container as="nav" mb={8}>
      <Flex justify="space-between" shrink="1">
        <Box py="4">
          <Text fontWeight="semibold">Leonardo.Ai Web Team Technical Challenge V3.4.1</Text>
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
