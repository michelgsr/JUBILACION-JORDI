import { Pause, Play } from 'lucide-react';
import { MUSIC_SRC, MUSIC_VOLUME } from '../config.js';

/**
 * Música de fondo con un único elemento <audio> que vive durante toda la visita,
 * así nunca se reinicia al desplazarse. Si el audio falla, la carta sigue funcionando.
 */
export default function BackgroundMusic({ audioRef, playing, setPlaying, visible }) {
  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.volume = MUSIC_VOLUME;
      const attempt = audio.play();
      if (attempt && typeof attempt.catch === 'function') attempt.catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        preload="auto"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setPlaying(false)}
      />
      {visible && (
        <button
          type="button"
          className={`music${playing ? ' is-playing' : ''}`}
          onClick={toggle}
          aria-pressed={playing}
          aria-label={playing ? 'Pausar la música' : 'Reproducir la música'}
          title={playing ? 'Pausar la música' : 'Reproducir la música'}
        >
          <span className="music__bars" aria-hidden="true"><i /><i /><i /></span>
          {playing ? <Pause size={16} strokeWidth={1.5} aria-hidden="true" /> : <Play size={16} strokeWidth={1.5} aria-hidden="true" />}
        </button>
      )}
    </>
  );
}
