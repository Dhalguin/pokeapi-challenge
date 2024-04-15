import { ArrowLeftIcon, ArrowRightIcon } from '@/icons'
import { PagionationBarType } from './types'

const PagionationBar: React.FC<PagionationBarType> = ({
  paginationOptions,
  setPaginationOptions,
}) => {
  const { page, totalPages, limit } = paginationOptions

  const nextPage = () => {
    setPaginationOptions(prevState => ({
      ...prevState,
      page: prevState.page + 1,
      offset: prevState.offset + limit,
    }))
  }

  const prevPage = () => {
    setPaginationOptions(prevState => ({
      ...prevState,
      page: prevState.page - 1,
      offset: prevState.offset - limit,
    }))
  }

  const setPage = (page: number) => {
    setPaginationOptions(prevState => ({
      ...prevState,
      page: page,
      offset: page * limit - limit,
    }))
  }

  return (
    <div className="ctn-pagination">
      <button
        className={`btn-pagination ${page <= 1 && 'disabled'}`}
        disabled={page <= 1}
        onClick={() => prevPage()}
      >
        <ArrowLeftIcon width="20" height="20" fill={page <= 1 ? 'gray' : 'black'} />
        Back
      </button>
      {page > 1 && (
        <span className="btn-pagination" onClick={() => setPage(1)}>
          1
        </span>
      )}
      <span className="btn-pagination actived">{page}</span>
      {page !== totalPages && (
        <span className="btn-pagination" onClick={() => setPage(totalPages)}>
          {totalPages}
        </span>
      )}
      <button
        className={`btn-pagination ${page >= totalPages && 'disabled'}`}
        disabled={page >= totalPages}
        onClick={() => nextPage()}
      >
        Next
        <ArrowRightIcon width="20" height="20" fill={page >= totalPages ? 'gray' : 'black'} />
      </button>
    </div>
  )
}

export default PagionationBar
