'use client'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePokemon } from '@/contexts/pokeContext'
import { ArrowLeftIcon } from '@/icons'
import PokeDetail from '@/components/pokeDetail'

const DetailPage: NextPage = () => {
  const router = useRouter()
  const { pokemon } = usePokemon()

  useEffect(() => {
    if (!pokemon.id) router.push('/')
  })

  return (
    <div className="flex flex-col">
      <div
        className="absolute top-5 flex items-center cursor-pointer"
        onClick={() => router.push('/')}
      >
        <ArrowLeftIcon width="30" height="30" fill="gray" />
        <span className="text-lg text-gray-500 font-semibold">Back</span>
      </div>
      {pokemon.id && <PokeDetail pokemon={pokemon} />}
    </div>
  )
}

export default DetailPage
