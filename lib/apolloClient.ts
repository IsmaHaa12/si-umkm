// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://example.com/graphql', // ganti dengan URL GraphQL kamu
  cache: new InMemoryCache(),
})
