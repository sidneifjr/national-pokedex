import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { env } from '@/env'

export function usePokemonList() {
  /**
 * 1) Create a function that will iterate between the url of each item in the array returned from the API.
 * 2) Then, fetch those individual pokemon info and save it in the state.
 */
  const handlePokemonList = () => {
    const endpoints = [] as string[]

    for (let index = 1; index < 41; index++) {
      endpoints.push(`${env.VITE_API_BASE_URL}/pokemon/${index}/`)
    }

    const fetchPokemonData = async () => {
      const responses = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      )

      const pokemonData = responses.map((response) => response.data)
      return pokemonData
    }

    return fetchPokemonData()
  }

  const { data: pokemonList, isLoading } = useQuery({
    queryKey: ['pokemonList'],
    queryFn: handlePokemonList,
  })

  return { pokemonList, isLoading }
}