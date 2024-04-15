export type PokeInfoType = {
  id: number
  name: string
  abilities: string[]
  image: string
  types: string[]
  weight: number
  height: number
  base_experience: number
  gif: string
}

export type PokeCardType = {
  pokemon: PokeInfoType
}

export type PageInfoType = {
  count: number
  next: string
  previous: string
  results: { name: string; url: string }[]
}

export type PaginationOptionsType = {
  count: number
  page: number
  offset: number
  limit: number
  totalPages: number
}
