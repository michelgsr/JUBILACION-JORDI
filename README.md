# Carta digital de jubilación · Jordi Ciprés

Web interactiva (React + Vite) con un sobre que se abre, la carta de jubilación, la fotografía de Jordi, música de piano y la invitación a la comida del **sábado 31 de octubre de 2026 a las 14:00 h en Marampau Barcelona**.

## Puesta en marcha

Necesitas Node.js 18 o superior.

```bash
npm install
npm run dev        # vista previa en http://localhost:5173
npm run build      # genera la carpeta dist/ lista para publicar
npm run preview    # prueba local de la versión publicada
```

## Estructura

```
public/assets/
  jordi-cipres.jpg      ← fotografía de Jordi
  musica-piano.mp3      ← música de fondo (pieza de piano original, libre de derechos)
src/
  config.js             ← rutas de foto y música, volumen y datos de la comida
  App.jsx               ← orquesta el sobre, la carta y la música
  styles.css            ← paleta, tipografía, animaciones y diseño responsive
  components/
    EnvelopeIntro.jsx       sobre cerrado y animación de apertura
    RetirementLetter.jsx    carta con el mensaje completo
    JordiPhoto.jsx          fotografía con marco dorado
    CelebrationDetails.jsx  tarjeta de la comida y botón «Cómo llegar»
    BackgroundMusic.jsx     audio y control de reproducción/pausa
    LetterFooter.jsx        cierre y botón «Volver a leer la carta»
    Ornament.jsx            ramitas botánicas y separador dorado
```

## Sustituir la fotografía

1. Guarda la nueva imagen como `public/assets/jordi-cipres.jpg` (sobrescribe la actual).
2. Si tiene otro nombre o formato (por ejemplo `.png` o `.webp`), cambia `PHOTO_SRC` en `src/config.js`.
3. Actualiza `PHOTO_ALT` en el mismo archivo para que describa la nueva foto.
4. En `src/components/JordiPhoto.jsx`, ajusta los atributos `width` y `height` del `<img>` a las medidas reales de la nueva imagen (solo sirven para reservar el espacio; la foto nunca se deforma ni se recorta).

Consejo: una imagen de unos 1000–1400 px de ancho y menos de 500 KB carga rápido en el móvil.

## Cambiar la música

1. Copia tu archivo MP3 en `public/assets/musica-piano.mp3` (o cambia `MUSIC_SRC` en `src/config.js`).
2. Usa solo música con licencia que permita su uso (propia, dominio público o con licencia libre).
3. El volumen se ajusta con `MUSIC_VOLUME` (0 a 1; ahora 0,35).

La música empieza con el toque que abre el sobre (los navegadores bloquean el sonido automático) y se repite en bucle. Si el audio no se puede reproducir, la carta se muestra igualmente y el botón flotante permite intentarlo de nuevo.

## Publicar la web

Ejecuta `npm run build` y sube **el contenido** de la carpeta `dist/` a cualquier alojamiento estático. Las rutas son relativas, así que funciona en la raíz de un dominio o en una subcarpeta.

- **Netlify:** entra en app.netlify.com/drop y arrastra la carpeta `dist`.
- **Vercel:** importa el proyecto; detecta Vite automáticamente (comando `npm run build`, carpeta `dist`).
- **GitHub Pages:** sube el contenido de `dist/` a la rama de Pages.
- **Cualquier hosting (FTP):** copia el contenido de `dist/` en la carpeta pública.

### Versión de un solo archivo

`SINGLE=1 npm run build` incrusta tipografías, foto y música dentro de los archivos generados, útil si necesitas compartir la página sin carpeta de recursos.

## Accesibilidad y compatibilidad

- El sobre es un botón: se abre con toque, clic, Intro o Espacio.
- Respeta «reducir movimiento» del sistema (la apertura pasa a ser un fundido breve).
- Tipografías alojadas en el propio proyecto (Cormorant Garamond y Lato), sin servicios externos.
- El enlace «Cómo llegar» abre Google Maps en una pestaña nueva; si no hay app instalada, se abre en el navegador.
- Probado en Chromium a 390 px (móvil) y 1366 px (escritorio): sin errores de consola, sin desplazamiento horizontal, foto y audio cargan correctamente. Antes del día del evento, conviene una prueba rápida en Safari de iPhone.
