import { gql } from '@apollo/client'

export const GET_POKEMON_ABILITY = gql`
  query samplePokeAPIquery {
    pokemon_v2_ability {
      id
      name
      is_main_series
    }
  }
`
