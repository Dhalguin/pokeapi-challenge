import { IconType } from './types'

const ArrowRightIcon: React.FC<IconType> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M97.1932 120.26L19.5703 219.577C15.8279 224.366 9.75706 224.366 6.0147 219.577L1.85728 212.181C-1.88108 207.397 0.584465 201.277 4.31085 196.483L74.2375 110.932L6.0187 25.3816C2.28832 20.588 -1.26769 13.6828 2.47067 8.89935L6.0187 3.59142C9.76105 -1.19714 15.8319 -1.19714 19.5743 3.59142L97.1932 102.914C100.936 107.703 100.936 115.471 97.1932 120.26Z"
        fill={fill}
      />
    </svg>
  )
}

export default ArrowRightIcon
