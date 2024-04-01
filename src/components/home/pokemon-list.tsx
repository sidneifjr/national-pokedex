import pokeball from '@/assets/pokeball.png'
import { usePokemonList } from '@/hooks/usePokemonList'

import { Loader } from '../loader'
import { MotionWrapper } from '../motion-wrapper'
import { PokemonCard } from './pokemon-card'

export const PokemonList = () => {
  const { pokemonList, isLoading } = usePokemonList()

  return (
    <section className="mx-auto w-full max-w-[1400px]">
      <div className="flex w-full justify-end pb-4">
        <p className="flex items-center justify-end gap-1">
          <img src={pokeball} height={48} width={48} alt="" />

          <span className="flex-1 text-2xl font-semibold tracking-tight">
            1302
          </span>
        </p>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <MotionWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
          exit={{ opacity: 0 }}
        >
          <div className="grid gap-4 sm:grid-cols-2 tablet:grid-cols-3 xl:grid-cols-4">
            {pokemonList?.map((listItem) => {
              return <PokemonCard key={crypto.randomUUID()} data={listItem} />
            })}
          </div>
        </MotionWrapper>
      )}
    </section>
  )
}
