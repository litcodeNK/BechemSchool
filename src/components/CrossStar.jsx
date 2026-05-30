export default function CrossStar({ size = 14, style = {} }) {
  return (
    <img
      src="/icon-www.png"
      alt=""
      aria-hidden="true"
      style={{
        display: 'inline-block',
        flexShrink: 0,
        objectFit: 'contain',
        width: `${size}px`,
        height: `${size}px`,
        verticalAlign: 'middle',
        ...style,
      }}
    />
  )
}
