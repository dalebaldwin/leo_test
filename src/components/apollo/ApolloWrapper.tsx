'use client'

import { HttpLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs'

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'https://graphql.anilist.co',
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  })
}

// Next 14 docs are a bit limited on setting this up, found some instructions on github to handle the updated SSR/ RSC behaviour

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
