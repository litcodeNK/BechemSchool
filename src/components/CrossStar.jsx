export default function CrossStar({ size = 14, color = 'currentColor', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill={color}
      style={style}
      aria-hidden="true"
    >
      <path d="M7 0C7 0 6.1 4.5 0 7C6.1 9.5 7 14 7 14C7 14 7.9 9.5 14 7C7.9 4.5 7 0 7 0Z" />
    </svg>
  )
}
