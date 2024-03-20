import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { PokemonDetails } from '@/components/internal/pokemon-details/index'
import { queryClient } from '@/lib/react-query'

describe('Pokémon details', () => {
  it('should render the name correctly', () => {
    const testData = {
      name: 'Vaporeon',
    }

    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <PokemonDetails.Root>
            <div className="col-span-3 flex flex-col gap-4 rounded-lg border border-white p-4">
              <PokemonDetails.Name value={testData.name} />
            </div>
          </PokemonDetails.Root>
        </QueryClientProvider>
      </MemoryRouter>
    )

    const pokemonName = wrapper.getByText('Vaporeon')
    expect(pokemonName).toBeInTheDocument()
  })

  it('should render the description correctly', () => {
    const testData = {
      description: 'https://pokeapi.co/api/v2/pokemon-species/134/',
    }

    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <PokemonDetails.Root>
            <div className="col-span-3 flex flex-col gap-4 rounded-lg border border-white p-4">
              <PokemonDetails.Description value={testData.description} />
            </div>
          </PokemonDetails.Root>
        </QueryClientProvider>
      </MemoryRouter>
    )

    const pokemonScreen = wrapper.getByTestId('pokemon-screen')
    expect(pokemonScreen).toBeInTheDocument()
  })

  // it('should render the charts correctly', () => {
  //   const testData = {
  //     stats: [
  //       {
  //         base_stat: 130,
  //         effort: 2,

  //         stat: {
  //           name: 'hp',
  //           url: 'https://pokeapi.co/api/v2/stat/1/',
  //         },
  //       },

  //       {
  //         base_stat: 65,
  //         effort: 0,

  //         stat: {
  //           name: 'attack',
  //           url: 'https://pokeapi.co/api/v2/stat/2/',
  //         },
  //       },

  //       {
  //         base_stat: 60,
  //         effort: 0,

  //         stat: {
  //           name: 'defense',
  //           url: 'https://pokeapi.co/api/v2/stat/3/',
  //         },
  //       },

  //       {
  //         base_stat: 110,
  //         effort: 0,

  //         stat: {
  //           name: 'special-attack',
  //           url: 'https://pokeapi.co/api/v2/stat/4/',
  //         },
  //       },
  //       {
  //         base_stat: 95,
  //         effort: 0,

  //         stat: {
  //           name: 'special-defense',
  //           url: 'https://pokeapi.co/api/v2/stat/5/',
  //         },
  //       },
  //       {
  //         base_stat: 65,
  //         effort: 0,

  //         stat: {
  //           name: 'speed',
  //           url: 'https://pokeapi.co/api/v2/stat/6/',
  //         },
  //       },
  //     ],
  //   }

  //   const wrapper = render(
  //     <MemoryRouter>
  //       <QueryClientProvider client={queryClient}>
  //         <PokemonDetails.Root>
  //           <div className="col-span-3 flex flex-col gap-4 rounded-lg border border-white p-4">
  //             <PokemonDetails.Charts value={testData.stats} />
  //           </div>
  //         </PokemonDetails.Root>
  //       </QueryClientProvider>
  //     </MemoryRouter>
  //   )

  //   const pokemonHP = wrapper.getByText('130')
  //   const pokemonAttack = wrapper.getByText('65')
  //   const pokemonDefense = wrapper.getByText('60')
  //   const pokemonSpecialAttack = wrapper.getByText('110')
  //   const pokemonSpecialDefense = wrapper.getByText('95')
  //   const pokemonSpeed = wrapper.getByText('65')

  //   expect(pokemonHP).toBeInTheDocument()
  //   expect(pokemonAttack).toBeInTheDocument()
  //   expect(pokemonDefense).toBeInTheDocument()
  //   expect(pokemonSpecialAttack).toBeInTheDocument()
  //   expect(pokemonSpecialDefense).toBeInTheDocument()
  //   expect(pokemonSpeed).toBeInTheDocument()
  // })

  it('should render the moves correctly', () => {
    const testData = {
      moves: [
        {
          move: {
            name: 'alluring-voice',
            url: 'https://pokeapi.co/api/v2/move/914/',
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: 'machine',
                url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
              },
              version_group: {
                name: 'scarlet-violet',
                url: 'https://pokeapi.co/api/v2/version-group/25/',
              },
            },
          ],
        },
      ],
    }

    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <PokemonDetails.Root>
            <div className="col-span-3 flex flex-col gap-4 rounded-lg border border-white p-4">
              <PokemonDetails.Moves value={testData.moves} />
            </div>
          </PokemonDetails.Root>
        </QueryClientProvider>
      </MemoryRouter>
    )

    const pokemonMove = wrapper.getByText('alluring voice')
    expect(pokemonMove).toBeInTheDocument()
  })

  it('should render the types correctly', () => {
    const testData = {
      types: [
        {
          slot: 1,
          type: {
            name: 'water',
            url: 'https://pokeapi.co/api/v2/type/11/',
          },
        },
      ],
    }

    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <PokemonDetails.Root>
            <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border border-white p-4">
              <PokemonDetails.Types value={testData.types} />
            </div>
          </PokemonDetails.Root>
        </QueryClientProvider>
      </MemoryRouter>
    )

    const pokemonType = wrapper.getByText('water')
    expect(pokemonType).toBeInTheDocument()
  })

  it('should render the abilities correctly', () => {
    const testData = {
      abilities: [
        {
          ability: {
            name: 'water-absorb',
            url: 'https://pokeapi.co/api/v2/ability/11/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'hydration',
            url: 'https://pokeapi.co/api/v2/ability/93/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
    }

    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <PokemonDetails.Root>
            <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border border-white p-4">
              <PokemonDetails.Abilities value={testData?.abilities} />
            </div>
          </PokemonDetails.Root>
        </QueryClientProvider>
      </MemoryRouter>
    )

    const pokemonAbility1 = wrapper.getByText('water-absorb')
    const pokemonAbility2 = wrapper.getByText('hydration')

    expect(pokemonAbility1).toBeInTheDocument()
    expect(pokemonAbility2).toBeInTheDocument()
  })

  it('should render the image correctly', () => {
    const imgSrc = {
      sprites: {
        other: {
          home: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png',
          },
        },
      },
    }

    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <PokemonDetails.Root>
            <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border border-white p-4">
              <img
                src={imgSrc?.sprites.other.home.front_default}
                height={384}
                width={384}
                className="self-center object-contain"
                alt=""
                data-testid="pokemon-image"
              />
            </div>
          </PokemonDetails.Root>
        </QueryClientProvider>
      </MemoryRouter>
    )

    const pokemonImage = wrapper.getByTestId('pokemon-image')

    expect(pokemonImage).toHaveAttribute(
      'src',
      imgSrc?.sprites.other.home.front_default
    )
  })

  // it('should render the stats correctly', () => {
  //   const testData = {
  //     stats: [
  //       {
  //         base_stat: 130,
  //         effort: 2,

  //         stat: {
  //           name: 'hp',
  //           url: 'https://pokeapi.co/api/v2/stat/1/',
  //         },
  //       },

  //       {
  //         base_stat: 65,
  //         effort: 0,

  //         stat: {
  //           name: 'attack',
  //           url: 'https://pokeapi.co/api/v2/stat/2/',
  //         },
  //       },

  //       {
  //         base_stat: 60,
  //         effort: 0,

  //         stat: {
  //           name: 'defense',
  //           url: 'https://pokeapi.co/api/v2/stat/3/',
  //         },
  //       },

  //       {
  //         base_stat: 110,
  //         effort: 0,

  //         stat: {
  //           name: 'special-attack',
  //           url: 'https://pokeapi.co/api/v2/stat/4/',
  //         },
  //       },
  //       {
  //         base_stat: 95,
  //         effort: 0,

  //         stat: {
  //           name: 'special-defense',
  //           url: 'https://pokeapi.co/api/v2/stat/5/',
  //         },
  //       },
  //       {
  //         base_stat: 65,
  //         effort: 0,

  //         stat: {
  //           name: 'speed',
  //           url: 'https://pokeapi.co/api/v2/stat/6/',
  //         },
  //       },
  //     ],
  //   }

  //   const wrapper = render(
  //     <MemoryRouter>
  //       <QueryClientProvider client={queryClient}>
  //         <PokemonDetails.Root>
  //           <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border border-white p-4">
  //             <PokemonDetails.Stats value={testData.stats} />
  //           </div>
  //         </PokemonDetails.Root>
  //       </QueryClientProvider>
  //     </MemoryRouter>
  //   )

  //   const pokemonHP = wrapper.getByTestId('hp')
  //   const pokemonAttack = wrapper.getByText('attack')
  //   const pokemonDefense = wrapper.getByText('defense')
  //   const pokemonSpecialAttack = wrapper.getByText('specialAttack')
  //   const pokemonSpecialDefense = wrapper.getByText('specialDefense')
  //   const pokemonSpeed = wrapper.getByText('speed')

  //   expect(pokemonHP).toBeInTheDocument()
  //   expect(pokemonAttack).toBeInTheDocument()
  //   expect(pokemonDefense).toBeInTheDocument()
  //   expect(pokemonSpecialAttack).toBeInTheDocument()
  //   expect(pokemonSpecialDefense).toBeInTheDocument()
  //   expect(pokemonSpeed).toBeInTheDocument()
  // })

  it('should render the entire component correctly', () => {
    const testData = {
      name: 'Vaporeon',
      description: 'https://pokeapi.co/api/v2/pokemon-species/134/',
      stats: [
        {
          base_stat: 130,
          effort: 2,

          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/',
          },
        },

        {
          base_stat: 65,
          effort: 0,

          stat: {
            name: 'attack',
            url: 'https://pokeapi.co/api/v2/stat/2/',
          },
        },

        {
          base_stat: 60,
          effort: 0,

          stat: {
            name: 'defense',
            url: 'https://pokeapi.co/api/v2/stat/3/',
          },
        },

        {
          base_stat: 110,
          effort: 0,

          stat: {
            name: 'special-attack',
            url: 'https://pokeapi.co/api/v2/stat/4/',
          },
        },
        {
          base_stat: 95,
          effort: 0,

          stat: {
            name: 'special-defense',
            url: 'https://pokeapi.co/api/v2/stat/5/',
          },
        },
        {
          base_stat: 65,
          effort: 0,

          stat: {
            name: 'speed',
            url: 'https://pokeapi.co/api/v2/stat/6/',
          },
        },
      ],
      moves: [
        {
          move: {
            name: 'alluring-voice',
            url: 'https://pokeapi.co/api/v2/move/914/',
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: 'machine',
                url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
              },
              version_group: {
                name: 'scarlet-violet',
                url: 'https://pokeapi.co/api/v2/version-group/25/',
              },
            },
          ],
        },
      ],

      types: [
        {
          slot: 1,
          type: {
            name: 'water',
            url: 'https://pokeapi.co/api/v2/type/11/',
          },
        },
      ],

      abilities: [
        {
          ability: {
            name: 'water-absorb',
            url: 'https://pokeapi.co/api/v2/ability/11/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'hydration',
            url: 'https://pokeapi.co/api/v2/ability/93/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
    }

    const imgSrc = {
      sprites: {
        other: {
          home: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png',
          },
        },
      },
    }

    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <PokemonDetails.Root>
            <div className="col-span-3 flex flex-col gap-4 rounded-lg border border-white p-4">
              <PokemonDetails.Name value={testData.name} />

              <PokemonDetails.Description value={testData.description} />

              <PokemonDetails.Charts value={testData.stats} />

              <PokemonDetails.Moves value={testData.moves} />
            </div>{' '}
            <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border border-white p-4">
              <img
                src={imgSrc?.sprites.other.home.front_default}
                height={384}
                width={384}
                className="self-center object-contain"
                alt=""
              />

              <PokemonDetails.Stats value={testData.stats} />

              <PokemonDetails.Types value={testData.types} />

              <PokemonDetails.Abilities value={testData?.abilities} />
            </div>
          </PokemonDetails.Root>
        </QueryClientProvider>
      </MemoryRouter>
    )

    const pokemonScreen = wrapper.getByTestId('pokemon-screen')
    expect(pokemonScreen).toBeInTheDocument()
  })
})
