import { ApolloProvider } from '@apollo/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { client } from './lib/apollo'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export default function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | National Pokédex" />

      <Toaster richColors />

      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ApolloProvider>
    </HelmetProvider>
  )
}
