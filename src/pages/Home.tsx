import { useQuery } from '@apollo/client'
import { Helmet } from 'react-helmet-async'

import { PokemonList } from '@/components/home/pokemon-list'
import { GET_POKEMON } from '@/queries/get-pokemon'

export const Home = () => {
  const { data } = useQuery(GET_POKEMON)
  console.log(data)

  return (
    <>
      <Helmet title="Home" />

      <PokemonList />
    </>
  )
}
