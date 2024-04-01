import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { searchPokemon } from '@/api/searchPokemon'

const searchForm = z.object({
  search: z.string(),
})

export type SearchFormTypes = z.infer<typeof searchForm>

export function useSearch() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormTypes>({
    defaultValues: {
      search: '',
    },
  })

  const navigate = useNavigate()

  const { mutateAsync: search } = useMutation({
    mutationFn: searchPokemon,
    retry: 1,
    onError: () =>
      toast.error(`This pokémon does not exist. \n Please try again.`),
  })

  const handleSearch = async (data: SearchFormTypes) => {
    const valueSearched = data.search

    if (valueSearched.trim() !== '') {
      const name = valueSearched.toLocaleLowerCase()

      await search(name)

      navigate(`/pokemon/${name}`)
    }
  }

  return { register, handleSubmit, isSubmitting, handleSearch }
}