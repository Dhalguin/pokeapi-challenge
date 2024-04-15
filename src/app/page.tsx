import PokeList from '@/components/pokeList'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* <div className="flex justify-center">
        <Image src="/images/logo.png" alt="pokemon logo" width={350} height={350} />
      </div> */}
      <PokeList />
    </div>
  )
}
