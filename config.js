// Recursos y datos editables de la carta.
// Las rutas son relativas a index.html, así la web funciona en la raíz del dominio o en una subcarpeta.

// Fotografía de Jordi. Para sustituirla, reemplaza public/assets/jordi-cipres.jpg
// por la nueva imagen (mismo nombre) o cambia aquí la ruta.
export const PHOTO_SRC = './assets/jordi-cipres.jpg';
export const PHOTO_ALT =
  'Jordi Ciprés, sonriente y con gafas, celebrando su jubilación junto a tres personas alrededor de una tarta con el texto «¡Feliz jubilación!»';

// Música de fondo. Para sustituirla, reemplaza public/assets/musica-piano.mp3.
export const MUSIC_SRC = './assets/musica-piano.mp3';
export const MUSIC_VOLUME = 0.35;

export const EVENT = {
  celebration: 'Comida de jubilación de Jordi Ciprés',
  date: 'Sábado, 31 de octubre de 2026',
  dateISO: '2026-10-31T14:00',
  time: '14:00 h',
  venue: 'Marampau Barcelona',
  address: 'Rambla de Catalunya, 133, Eixample, 08008 Barcelona',
  mapsUrl:
    'https://www.google.com/maps/place//data=!4m2!3m1!1s0x12a4a38699e4da83:0x9b6e323830a99e29?sa=X&ved=1t:8290&ictx=111',
};
