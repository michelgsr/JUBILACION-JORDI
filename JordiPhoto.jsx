import { useState } from 'react';
import { PHOTO_SRC, PHOTO_ALT } from '../config.js';

/** Fotografía de Jordi con marco fino dorado. Mantiene sus proporciones originales. */
export default function JordiPhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="photo reveal" style={{ '--d': '420ms' }}>
      <span className="photo__corner photo__corner--tl" aria-hidden="true" />
      <span className="photo__corner photo__corner--br" aria-hidden="true" />
      <div className="photo__frame">
        {failed ? (
          <div className="photo__missing" role="note">
            Aquí irá la fotografía de Jordi (public/assets/jordi-cipres.jpg).
          </div>
        ) : (
          <img
            src={PHOTO_SRC}
            alt={PHOTO_ALT}
            width="896"
            height="1195"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </figure>
  );
}
