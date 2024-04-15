import { bgColorByPokeType } from '@/utils/pokeCard'
import { PokeInfoType } from '../pokeList/types'

const PokeInfoSection: React.FC<{ pokemon: PokeInfoType }> = ({ pokemon }) => {
  return (
    <div className="flex flex-col gap-2 flex-1 justify-center">
      <span className="text-xl font-semibold">Pokedex data</span>
      <div className="flex gap-2">
        <p className="text-gray-500 basis-1/3">HABILITIES</p>
        <div>
          {pokemon.abilities.map(ability => (
            <p key={ability}>{ability}</p>
          ))}
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-300" />
      <div className="flex gap-2">
        <p className="text-gray-500 basis-1/3">TYPE</p>
        <div className="flex gap-1">
          {pokemon.types.map(type => (
            <p key={type} className={`py-1 px-3 rounded-md ${bgColorByPokeType(type)}`}>
              {type}
            </p>
          ))}
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-300" />
      <div className="flex gap-2">
        <p className="text-gray-500 basis-1/3">EXPERIENCE</p>
        <p>{pokemon.base_experience}</p>
      </div>
      <div className="h-0.5 w-full bg-gray-300" />
      <div className="flex gap-2">
        <p className="text-gray-500 basis-1/3">WEIGHT</p>
        <p>{pokemon.weight}</p>
      </div>
      <div className="h-0.5 w-full bg-gray-300" />
      <div className="flex gap-2">
        <p className="text-gray-500 basis-1/3">HEIGHT</p>
        <p>{pokemon.height}</p>
      </div>
      <div className="h-0.5 w-full bg-gray-300" />
    </div>
  )
}

export default PokeInfoSection
