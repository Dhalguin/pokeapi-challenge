import { IconType } from './types'

const ArrowLeftIcon: React.FC<IconType> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.80677 102.909L80.4297 3.59142C84.1721 -1.19714 90.2429 -1.19714 93.9853 3.59142L98.1427 10.9882C101.881 15.7716 99.4155 21.8919 95.6891 26.6856L25.7625 112.236L93.9813 197.787C97.7117 202.581 101.268 209.486 97.5293 214.27L93.9813 219.577C90.2389 224.366 84.1681 224.366 80.4257 219.577L2.80677 120.254C-0.935589 115.466 -0.935589 107.698 2.80677 102.909Z"
        fill={fill}
      />
    </svg>
  )
}

export default ArrowLeftIcon
