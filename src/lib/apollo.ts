import { ApolloClient, InMemoryCache } from '@apollo/client'

import { env } from '@/env'

const apolloURI = `${env.VITE_API_BASE_URL_GRAPHQL}`

export const client = new ApolloClient({
  uri: apolloURI,
  cache: new InMemoryCache(),
})
