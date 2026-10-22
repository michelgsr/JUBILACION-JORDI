import { ArrowUp } from 'lucide-react';
import { prefersReducedMotion } from '../motion.js';
import { Sprig } from './Ornament.jsx';

export default function LetterFooter() {
  const readAgain = () => {
    const letter = document.getElementById('carta');
    if (!letter) return;
    letter.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    letter.focus({ preventScroll: true });
  };

  return (
    <footer className="closing" aria-label="Cierre de la carta">
      <p className="closing__kicker">Lo mejor está por venir</p>
      <div className="closing__ornament" aria-hidden="true">
        <Sprig flip />
        <svg viewBox="0 0 24 24" className="closing__star">
          <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z" fill="currentColor" />
        </svg>
        <Sprig />
      </div>
      <p className="closing__line">Una nueva etapa. Más tiempo. Nuevos recuerdos.</p>
      <p className="closing__wish">¡Feliz jubilación, Jordi!</p>
      <button type="button" className="button button--ghost" onClick={readAgain}>
        <ArrowUp size={16} strokeWidth={1.5} aria-hidden="true" />
        Volver a leer la carta
      </button>
    </footer>
  );
}
