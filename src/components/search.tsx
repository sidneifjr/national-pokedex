import { useSearch } from '@/hooks/useSearch'

import { Loader } from './loader'
import { Button } from './ui/button'
import { Input } from './ui/input'

export const Search = () => {
  const { handleSearch, isSubmitting, handleSubmit, register } = useSearch()

  return (
    <div className="flex w-full justify-center border-b border-white pb-8">
      <form
        className="flex w-full max-w-96 gap-4"
        onSubmit={handleSubmit(handleSearch)}
      >
        <Input
          data-testid="search-input"
          className="w-full border-white"
          type="search"
          placeholder="Search for pokémon; e.g. Lucario"
          {...register('search')}
        />

        <Button disabled={isSubmitting} className="min-w-20 text-white">
          {isSubmitting ? <Loader height={30} width={30} /> : 'Submit'}
        </Button>
      </form>
    </div>
  )
}
