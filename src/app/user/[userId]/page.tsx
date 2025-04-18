'use client'

import { useUserData } from '@/hooks/useUserData'
import { use, useEffect, useState } from 'react'
import { Box, Text, Input, Field, Container, Flex, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function UserId({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = use(params)
  const [userName, setUserName] = useState<string>('')
  const [userNameError, setUserNameError] = useState<boolean>(false)
  const [jobTitle, setJobTitle] = useState<string>('')
  const [jobTitleError, setJobTitleError] = useState<boolean>(false)
  const [enableEdit, setEnableEdit] = useState<boolean>(false)

  const { editUser, activeUser } = useUserData()

  const canEdit = activeUser?.userId === userId

  // Effect to set init data
  useEffect(() => {
    if (!enableEdit && activeUser) {
      setUserName(activeUser?.userName || '')
      setJobTitle(activeUser?.jobTitle || '')
      setUserNameError(false)
      setJobTitleError(false)
      setEnableEdit(true)
    }
  }, [activeUser, userName, jobTitle, enableEdit])

  // Effect that handles updates, we do this so db update reacts to input and isn't bound directly do it
  // binding directly tends to result in previous updates coming back into the local value
  useEffect(() => {
    const unCheck = userName.length === 0
    const jtCheck = jobTitle.length === 0

    if (unCheck) {
      setUserNameError(true)
    }
    if (jtCheck) {
      setJobTitleError(true)
    }

    if (canEdit && !unCheck && !jtCheck) {
      editUser({ userName, jobTitle, userId })
      setUserNameError(false)
      setJobTitleError(false)
    }
  }, [activeUser, userName, jobTitle, canEdit, editUser, userId])

  if (!userId) {
    return (
      <Container>
        <Text>No user active</Text>
      </Container>
    )
  }

  if (!canEdit) {
    return (
      <Container>
        <Text>Not authorised to edit</Text>
      </Container>
    )
  }

  return (
    // <UserEdit
    //   userAction={updateUser}
    //   actionText="Update"
    //   uName={activeUser.userName}
    //   jTitle={activeUser.jobTitle}
    // />

    // Can use example above however that's not as cool as real time edit to db
    <Flex justify="center">
      <Box w={{ lg: 'lg' }}>
        <Box mb={16}>
          <Text textStyle="2xl">Update values in fields to change in real time</Text>
        </Box>
        <Box mb={4}>
          <Field.Root invalid={userNameError}>
            <Field.Label>User Name</Field.Label>
            <Input
              disabled={!canEdit}
              placeholder="Enter your user name"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
        </Box>
        <Box mb={4}>
          <Field.Root invalid={jobTitleError}>
            <Field.Label>Job Title</Field.Label>
            <Input
              disabled={!canEdit}
              placeholder="Enter your job title"
              onChange={(e) => setJobTitle(e.target.value)}
              value={jobTitle}
            />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
        </Box>
        <Box mt="16" py="4">
          <ChakraLink asChild fontWeight="semibold">
            <NextLink href="/">Return to Home</NextLink>
          </ChakraLink>
        </Box>
      </Box>
    </Flex>
  )
}
