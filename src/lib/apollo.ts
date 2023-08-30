import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cllxrizjl18b701ufgyhk13am/master',
  cache: new InMemoryCache(),
})
