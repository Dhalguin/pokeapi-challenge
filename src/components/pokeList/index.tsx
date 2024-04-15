'use client'
import { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import PagionationBar from '../pagination'
import PokeCard from './pokeCard'
import { SpinnerUI } from '@/packages'
import { PageInfoType, PaginationOptionsType, PokeInfoType } from './types'

const initialPaginationOptions: PaginationOptionsType = {
  count: 0,
  page: 1,
  offset: 0,
  limit: 15,
  totalPages: 0,
}

const PokeList: React.FC = () => {
  const [allPokemos, setAllPokemons] = useState<PokeInfoType[]>([])
  const [paginationOptions, setPaginationOptions] =
    useState<PaginationOptionsType>(initialPaginationOptions)

  const { isPending, data: pageData } = useQuery<PageInfoType>({
    queryKey: ['pokemons_data', paginationOptions.offset],
    queryFn: () =>
      fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${paginationOptions.limit}&offset=${paginationOptions.offset}`
      ).then(async res => res.json()),
  })

  const getPokemonsDetail = useCallback(async () => {
    const results = pageData?.results.map(async (pokemon: { name: string; url: string }) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })

    if (results) {
      const promises = await Promise.all(results)
      const pokemons: PokeInfoType[] = promises.map(pokemon => ({
        ...pokemon,
        image: pokemon.sprites.other.home.front_default,
        abilities: pokemon.abilities.map((ability: any) => ability.ability.name),
        types: pokemon.types.map((type: any) => type.type.name),
        gif: pokemon.sprites.other.showdown.front_default,
      }))

      setAllPokemons(pokemons)
    }
  }, [pageData?.results])

  useEffect(() => {
    if (pageData) {
      setPaginationOptions(prevState => ({
        ...prevState,
        count: pageData.count,
        totalPages: Math.ceil(pageData.count / paginationOptions.limit),
      }))
    }
  }, [pageData, paginationOptions.limit])

  useEffect(() => {
    if (pageData) getPokemonsDetail()
  }, [pageData, getPokemonsDetail])

  if (isPending || allPokemos.length < 1) return <SpinnerUI />

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-4 justify-center">
        {allPokemos.map(pokemon => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <PagionationBar
        paginationOptions={paginationOptions}
        setPaginationOptions={setPaginationOptions}
      />
    </div>
  )
}

export default PokeList
