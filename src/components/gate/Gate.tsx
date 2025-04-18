'use client'

import { useUserData } from '@/hooks/useUserData'

type Props = {
  SignIn: React.ComponentType
  Content: React.ComponentType
}

export const Gate = ({ SignIn, Content }: Props) => {
  const { activeUser } = useUserData()

  // Not how I want to do this generally and yuk but works for a small test
  // would ideally have an auth layer at the base layout that would also work SSR
  // since this is client side it will break the moment we run it in the layout

  // This just stops the flash
  if (activeUser === undefined) {
    return <></>
  }

  if (activeUser === null) {
    return <SignIn />
  }

  return <Content />
}

// Simple auth gate that takes components as props
