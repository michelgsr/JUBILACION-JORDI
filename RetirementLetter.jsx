import JordiPhoto from './JordiPhoto.jsx';
import CelebrationDetails from './CelebrationDetails.jsx';
import { GoldDivider, Sprig } from './Ornament.jsx';

const MESSAGE = [
  'Hoy comienza una etapa muy especial, una de esas que merecen celebrarse de verdad.',
  'Después de tantos años de dedicación, esfuerzo, compromiso y experiencias compartidas, ha llegado el momento de mirar atrás con orgullo y mirar hacia delante con ilusión.',
  'La jubilación no es el final de un camino, sino el comienzo de otro en el que el tiempo pasa a ser un regalo: tiempo para disfrutar sin prisas, descubrir nuevas aficiones, compartir momentos con las personas que quieres y dedicarte a todo aquello que quizá siempre has querido hacer.',
  'Te mereces disfrutar de esta nueva etapa con tranquilidad, alegría y muchas razones para sonreír. Que vengan días llenos de buenos momentos, nuevas aventuras, sobremesas interminables y recuerdos que todavía están por crear.',
  'Y una ocasión tan especial no podía quedarse sin celebrar.',
  'Por eso, hemos preparado una comida para reunirnos, compartir un buen rato y brindar por todo lo vivido, por lo conseguido y, sobre todo, por todo lo bonito que está por venir.',
  'Porque después de tantos años dando lo mejor de ti, ahora toca disfrutar.',
  '¡Feliz jubilación, Jordi! Que esta nueva etapa te regale todo el tiempo, la felicidad y las experiencias que mereces.',
];

export default function RetirementLetter() {
  return (
    <article className="letter" id="carta" tabIndex={-1} aria-labelledby="letter-title">
      <header className="letter__head">
        <Sprig className="letter__sprig reveal" />
        <p className="eyebrow reveal" style={{ '--d': '80ms' }}>Para Jordi Ciprés</p>
        <h1 id="letter-title" className="letter__title reveal" style={{ '--d': '200ms' }}>
          Feliz jubilación, <em>Jordi</em>
        </h1>
      </header>

      <JordiPhoto />

      <div className="letter__body">
        <p className="letter__salute reveal" style={{ '--d': '620ms' }}>Querido Jordi:</p>
        {MESSAGE.map((text, i) => (
          <p
            key={i}
            className={`reveal${i === 6 ? ' letter__emph' : ''}`}
            style={{ '--d': `${Math.min(720 + i * 110, 1300)}ms` }}
          >
            {text}
          </p>
        ))}
        <p className="letter__closing">Con mucho cariño.</p>
      </div>

      <p className="letter__signature">
        Con cariño, para celebrar todo lo que has dado y todo lo que te queda por disfrutar.
      </p>

      <GoldDivider className="letter__divider" />

      <CelebrationDetails />
    </article>
  );
}
