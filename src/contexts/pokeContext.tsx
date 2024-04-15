'use client'
import { PokeInfoType } from '@/components/pokeList/types'
import { createContext, useContext, useState } from 'react'

type PokeContextType = {
  pokemon: PokeInfoType
  setPokemon: (pokemon: PokeInfoType) => void
}

const initialPokemon: PokeContextType = {
  pokemon: {} as PokeInfoType,
  setPokemon: ({}) => null,
}

export const PokemonContext = createContext<PokeContextType>(initialPokemon)

export const PokemonProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [pokemon, setPokemon] = useState<PokeInfoType>(initialPokemon.pokemon)

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>{children}</PokemonContext.Provider>
  )
}

export const usePokemon = () => {
  const context = useContext(PokemonContext)

  if (context === undefined)
    throw new Error('useContextSession must be used within a SessionProvider')

  return context
}
