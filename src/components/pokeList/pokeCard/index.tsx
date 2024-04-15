import { useEffect } from 'react'
import { usePokemon } from '@/contexts/pokeContext'
import Link from 'next/link'
import { PokeCardType } from '../types'
import { bgColorByPokeType } from '@/utils/pokeCard'

const PokeCard: React.FC<PokeCardType> = ({ pokemon }) => {
  const { setPokemon } = usePokemon()

  const pokeStoraged: string[] = JSON.parse(localStorage.getItem('pokemons') ?? '')

  const redirectToDetail = () => {
    setPokemon(pokemon)

    const pokeData: string[] = JSON.parse(localStorage.getItem('pokemons') ?? '')
    const newPoke = pokeData.concat(String(pokemon.id))

    localStorage.setItem('pokemons', JSON.stringify(newPoke))
  }

  return (
    <Link
      key={pokemon.id}
      href={`/detail/${pokemon.id}`}
      className={`poke-card ${
        pokeStoraged.includes(String(pokemon.id)) ? 'bg-gray-100' : 'bg-white'
      }`}
      onClick={() => redirectToDetail()}
    >
      <div className="flex flex-col items-center h-full p-2">
        <img src={pokemon.image} alt={pokemon.name} className="w-2/5" />
        <div className="w-full py-2 rounded-md flex justify-center">
          <span
            className={`text-2xl font-bold ${
              pokeStoraged.includes(String(pokemon.id)) ? 'text-gray-500' : 'text-gray-900'
            }`}
          >
            {pokemon.name}
          </span>
        </div>
        <div className={`flex justify-center gap-2 mt-3`}>
          {pokemon.types.map(type => (
            <div
              key={type}
              className={`p-2 rounded-md min-w-14 flex justify-center ${bgColorByPokeType(type)}`}
            >
              <span>{type}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default PokeCard
