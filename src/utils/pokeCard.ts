export const bgColorByPokeType = (type: string): string => {
  switch (type) {
    case 'grass':
      return 'bg-green-400'

    case 'fire':
      return 'bg-red-500'

    case 'poison':
      return 'bg-fuchsia-400'

    case 'water':
      return 'bg-blue-400'

    case 'flying':
      return 'bg-teal-400'

    case 'bug':
      return 'bg-lime-400'

    case 'electric':
      return 'bg-yellow-400'

    case 'ground':
      return 'bg-yellow-600'

    case 'fairy':
      return 'bg-rose-400'

    case 'fighting':
      return 'bg-amber-700'

    case 'psychic':
      return 'bg-pink-600'

    case 'rock':
      return 'bg-emerald-400'

    case 'ice':
      return 'bg-sky-400'

    case 'ghost':
      return 'bg-purple-400'

    case 'dragon':
      return 'bg-purple-300'

    default:
      return 'bg-gray-400'
  }
}
