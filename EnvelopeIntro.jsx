import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../motion.js';

/**
 * Pantalla inicial: sobre cerrado con sello de lacre.
 * Al tocarlo: el sello se desvanece, la solapa se levanta en 3D,
 * la carta sale del sobre y crece hasta dar paso al contenido.
 */
export default function EnvelopeIntro({ onOpen, onReveal, onDone }) {
  const [phase, setPhase] = useState('closed'); // closed → opening → leaving
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  const open = () => {
    if (phase !== 'closed') return;
    onOpen?.();
    const reduced = prefersReducedMotion();
    setPhase('opening');
    if (reduced) {
      later(() => { setPhase('leaving'); onReveal?.(); }, 150);
      later(() => onDone?.(), 500);
      return;
    }
    later(() => { setPhase('leaving'); onReveal?.(); }, 2050);
    later(() => onDone?.(), 2750);
  };

  return (
    <section className={`intro is-${phase}`} aria-label="Sobre con tu carta">
      <div className="intro__inner">
        <button
          type="button"
          className="envelope"
          onClick={open}
          aria-label="Abrir la carta para Jordi Ciprés"
          disabled={phase !== 'closed'}
        >
          <span className="envelope__back" aria-hidden="true" />

          <span className="envelope__letter" aria-hidden="true">
            <span className="envelope__letter-eyebrow">Para Jordi Ciprés</span>
            <span className="envelope__letter-title">Feliz jubilación, Jordi</span>
            <span className="envelope__letter-lines">
              <i /><i /><i /><i /><i />
            </span>
          </span>

          <span className="envelope__pocket" aria-hidden="true">
            <svg viewBox="0 0 300 192" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pocketShade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#EFE7D8" />
                  <stop offset="1" stopColor="#E6DBC8" />
                </linearGradient>
              </defs>
              <path d="M0 0 L150 92 L300 0 L300 192 L0 192 Z" fill="url(#pocketShade)" />
              <path d="M0 0 L150 92 L300 0" fill="none" stroke="#B69A65" strokeOpacity="0.75" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <path d="M0 192 L124 100 M300 192 L176 100" fill="none" stroke="#1F3045" strokeOpacity="0.05" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="envelope__name">Jordi Ciprés</span>
          </span>

          <span className="envelope__flap" aria-hidden="true">
            <svg className="envelope__flap-face" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flapShade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#E9DFCE" />
                  <stop offset="1" stopColor="#E2D5BF" />
                </linearGradient>
              </defs>
              <path d="M0 0 L300 0 L150 100 Z" fill="url(#flapShade)" />
              <path d="M0 0 L150 100 L300 0" fill="none" stroke="#B69A65" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
            </svg>
            <svg className="envelope__flap-inside" viewBox="0 0 300 100" preserveAspectRatio="none">
              <path d="M0 0 L300 0 L150 100 Z" fill="#DCCFB7" />
              <path d="M0 0 L150 100 L300 0" fill="none" stroke="#B69A65" strokeOpacity="0.6" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </span>

          <span className="seal" aria-hidden="true">
            <span className="seal__ring">JC</span>
            <span className="seal__glint" />
          </span>
        </button>

        <p className="intro__line">Una invitación muy especial para ti</p>
        <p className="intro__hint" aria-hidden={phase !== 'closed'}>
          Toca el sobre para abrir tu carta
        </p>
      </div>
    </section>
  );
}
