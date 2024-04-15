import { PaginationOptionsType } from '../pokeList/types'

export type PagionationBarType = {
  paginationOptions: PaginationOptionsType
  setPaginationOptions: React.Dispatch<React.SetStateAction<PaginationOptionsType>>
}
