export default function RepkalaLogo({ size = 48, className = '', style = {}, rounded = 12 }) {
  return (
    <img
      src="/logo.png"
      alt="Repkala"
      width={size}
      height={size}
      className={`repkala-brand-logo ${className}`.trim()}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        borderRadius: rounded,
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style,
      }}
    />
  )
}
