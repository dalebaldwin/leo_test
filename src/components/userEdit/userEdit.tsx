'use client'

import { Box, Button, Text, Input, Field, Flex } from '@chakra-ui/react'
import { useState } from 'react'

type Props = {
  userAction: ({ userName, jobTitle }: { userName: string; jobTitle: string }) => void
  actionText: string
  uName: string
  jTitle: string
}

export const UserEdit = ({ userAction, actionText, uName, jTitle }: Props) => {
  const [userName, setUserName] = useState<string>(uName)
  const [userNameError, setUserNameError] = useState<boolean>(false)
  const [jobTitle, setJobTitle] = useState<string>(jTitle)
  const [jobTitleError, setJobTitleError] = useState<boolean>(false)

  const signInAction = () => {
    const unCheck = userName.length === 0
    const jtCheck = jobTitle.length === 0

    if (unCheck) {
      setUserNameError(true)
    }
    if (jtCheck) {
      setJobTitleError(true)
    }

    if (!unCheck && !jtCheck) {
      userAction({ userName, jobTitle })
    }
  }

  return (
    <Flex justify="center">
      <Box w={{ lg: 'lg' }}>
        {userNameError && jobTitleError && (
          <Box mb={2}>
            <Text>Please fix error</Text>
          </Box>
        )}
        <Box mb={4}>
          <Field.Root invalid={userNameError}>
            <Field.Label>User Name</Field.Label>
            <Input
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
              placeholder="Enter your job title"
              onChange={(e) => setJobTitle(e.target.value)}
              value={jobTitle}
            />
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
        </Box>
        <Box mb={4}>
          <Button onClick={signInAction}>{actionText}</Button>
        </Box>
      </Box>
    </Flex>
  )
}
