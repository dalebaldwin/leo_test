'use client'

import { useUserData } from '@/hooks/useUserData'

type Props = {
  SignIn: React.ComponentType
  Content: React.ComponentType
}

export const Gate = ({ SignIn, Content }: Props) => {
  const { activeUser } = useUserData()

  if (!activeUser) {
    return <SignIn />
  }

  return <Content />
}

// Simple auth gate that takes components as props
