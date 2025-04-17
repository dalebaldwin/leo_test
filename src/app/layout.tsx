import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Provider } from '@/components/ui/provider'
import { ApolloWrapper } from '@/components/apollo/ApolloWrapper'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

const noto = Noto_Sans_JP({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Leonardo.Ai Web Team Technical Challenge',
  description: 'App built by Dale Baldwin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.className} ${noto.className} antialiased`}>
        <ApolloWrapper>
          <Provider>{children}</Provider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
