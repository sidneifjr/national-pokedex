import { gql } from '@apollo/client'

// Assembled with: https://beta.pokeapi.co/graphql/console/
export const GET_POKEMON = gql`
  query getPokemon {
    pokemon_v2_pokemon {
      id
      name
      order
    }

    pokemon_v2_ability {
      id
      name
      is_main_series
    }

    pokemon_v2_pokemontype {
      pokemon_v2_pokemon {
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`
