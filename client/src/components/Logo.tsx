interface LogoProps {
  size?: number
  showText?: boolean
  idPrefix?: string
}

export default function Logo({ size = 34, showText = true, idPrefix = 'logo' }: LogoProps) {
  const h = Math.round(size * 1.15)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={size}
        height={h}
        viewBox="0 0 34 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer flame body */}
        <path
          d="M17 1C17 1 4 11.5 4 23C4 31.3 9.7 38 17 38C24.3 38 30 31.3 30 23C30 11.5 17 1 17 1Z"
          fill={`url(#${idPrefix}-f1)`}
        />
        {/* Mid flame */}
        <path
          d="M17 15C17 15 10.5 21 10.5 27C10.5 30.5 13.4 33.5 17 33.5C20.6 33.5 23.5 30.5 23.5 27C23.5 21 17 15 17 15Z"
          fill={`url(#${idPrefix}-f2)`}
        />
        {/* Hot core */}
        <ellipse
          cx="17"
          cy="29"
          rx="4"
          ry="4.5"
          fill={`url(#${idPrefix}-f3)`}
          opacity="0.95"
        />
        <defs>
          <linearGradient
            id={`${idPrefix}-f1`}
            x1="17" y1="1"
            x2="17" y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#FF3D00" />
            <stop offset="55%"  stopColor="#FF6D00" />
            <stop offset="100%" stopColor="#FF9100" />
          </linearGradient>
          <linearGradient
            id={`${idPrefix}-f2`}
            x1="17" y1="15"
            x2="17" y2="33.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#FFD740" />
            <stop offset="100%" stopColor="#FF6D00" />
          </linearGradient>
          <radialGradient id={`${idPrefix}-f3`} cx="50%" cy="40%" r="50%">
            <stop offset="0%"   stopColor="#FFFDE7" />
            <stop offset="60%"  stopColor="#FFD740" />
            <stop offset="100%" stopColor="#FF9100" />
          </radialGradient>
        </defs>
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: `${size * 0.47}px`,
              letterSpacing: '0.08em',
              background: 'linear-gradient(135deg, #FF7043, #FF5722)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
            }}
          >
            IGNITE
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: `${size * 0.33}px`,
              letterSpacing: '0.24em',
              color: '#94A3B8',
              textTransform: 'uppercase',
            }}
          >
            LABS
          </span>
        </div>
      )}
    </div>
  )
}
