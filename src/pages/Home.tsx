import { useQuery } from '@apollo/client'
import { Helmet } from 'react-helmet-async'

import { PokemonList } from '@/components/home/pokemon-list'
import { GET_POKEMON_ABILITY } from '@/queries/get-pokemon-abilities'

export const Home = () => {
  const { data } = useQuery(GET_POKEMON_ABILITY)
  console.log(data)

  return (
    <>
      <Helmet title="Home" />

      <PokemonList />
    </>
  )
}
