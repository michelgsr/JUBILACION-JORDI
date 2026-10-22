/** Ramita botánica lineal, dibujada a mano en SVG. */
export function Sprig({ className = '', flip = false }) {
  return (
    <svg
      className={`sprig ${className}`}
      viewBox="0 0 120 40"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M4 30 C 34 30, 62 24, 116 12" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {[
        [26, 29, -18], [44, 27, 22], [60, 24, -24], [76, 20, 20], [92, 16, -26], [106, 13, 16],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y + (r < 0 ? -5 : 5)}
          rx="7.5"
          ry="2.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          transform={`rotate(${r} ${x} ${y + (r < 0 ? -5 : 5)})`}
        />
      ))}
    </svg>
  );
}

/** Separador dorado con dos ramitas y un rombo central. */
export function GoldDivider({ className = '' }) {
  return (
    <div className={`gold-divider ${className}`} role="separator" aria-hidden="true">
      <span className="gold-divider__line" />
      <Sprig flip />
      <svg className="gold-divider__gem" viewBox="0 0 12 12">
        <path d="M6 0 L12 6 L6 12 L0 6 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="6" cy="6" r="1.4" fill="currentColor" />
      </svg>
      <Sprig />
      <span className="gold-divider__line" />
    </div>
  );
}
