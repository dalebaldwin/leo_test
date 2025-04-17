'use client'

import { Content } from '@/components/content/Content'
import { use } from 'react'
import { redirect } from 'next/navigation'
import { useUserData } from '@/hooks/useUserData'

export default function PageID({ params }: { params: Promise<{ pageId: string }> }) {
  const { pageId } = use(params)
  const { activeUser } = useUserData()

  if (pageId === '1' || activeUser === null) {
    redirect('/')
  }

  return <Content pageId={Number(pageId)} />
}

// There would be some nicer ways to do this depening on auth solution but this is just an example
// Handles the page 1 scenario and redirects to base, redirects to base if no user
