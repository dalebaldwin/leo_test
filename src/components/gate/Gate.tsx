'use client'

import { useUserData } from '@/hooks/useUserData'

type Props = {
  SignIn: React.ComponentType
  Content: React.ComponentType
}

export const Gate = ({ SignIn, Content }: Props) => {
  const { activeUser } = useUserData()

  // not how I want to do this generally and yuk but works for a small test
  if (activeUser === undefined) {
    return <></>
  }

  if (activeUser === null) {
    return <SignIn />
  }

  return <Content />
}

// Simple auth gate that takes components as props
