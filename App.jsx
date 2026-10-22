import { useCallback, useEffect, useRef, useState } from 'react';
import EnvelopeIntro from './components/EnvelopeIntro.jsx';
import RetirementLetter from './components/RetirementLetter.jsx';
import LetterFooter from './components/LetterFooter.jsx';
import BackgroundMusic from './components/BackgroundMusic.jsx';
import { MUSIC_VOLUME } from './config.js';

export default function App() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [letterShown, setLetterShown] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  // Bloquea el desplazamiento mientras el sobre está cerrado.
  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', !introDone);
  }, [introDone]);

  // Se llama dentro del mismo gesto del usuario (toque, clic o tecla),
  // para que los navegadores permitan iniciar el audio.
  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.volume = MUSIC_VOLUME;
      const attempt = audio.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(() => setPlaying(false));
      }
    } catch {
      setPlaying(false);
    }
  }, []);

  const revealLetter = useCallback(() => {
    window.scrollTo(0, 0);
    setLetterShown(true);
  }, []);

  return (
    <>
      <BackgroundMusic
        audioRef={audioRef}
        playing={playing}
        setPlaying={setPlaying}
        visible={letterShown}
      />

      {!introDone && (
        <EnvelopeIntro
          onOpen={startMusic}
          onReveal={revealLetter}
          onDone={() => setIntroDone(true)}
        />
      )}

      {letterShown && (
        <main className="page">
          <RetirementLetter />
          <LetterFooter />
        </main>
      )}
    </>
  );
}
