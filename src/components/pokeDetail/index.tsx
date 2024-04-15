/* eslint-disable @next/next/no-img-element */
import { capitalizeWord } from '@/utils/strings'
import { PokeInfoType } from '../pokeList/types'
import PokeInfoSection from './infoSection'

const PokeDetail: React.FC<{ pokemon: PokeInfoType }> = ({ pokemon }) => {
  return (
    <div className="flex w-full justify-center h-full">
      <div className="ctn-card-detail">
        <div className="flex justify-between w-full">
          <div className="flex flex-col w-full">
            <span>#{pokemon.id}</span>
            <span className="text-4xl font-bold">{capitalizeWord(pokemon.name)}</span>
          </div>
          <img src={pokemon.gif} alt="front default pokemon gif" />
        </div>
        <div className="flex gap-5 w-full justify-center flex-col md:flex-row">
          <div className="flex flex-1 justify-end items-start">
            <img src={pokemon.image} alt="front default pokemon" />
          </div>
          <PokeInfoSection pokemon={pokemon} />
        </div>
      </div>
    </div>
  )
}

export default PokeDetail
