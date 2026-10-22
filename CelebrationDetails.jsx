import { CalendarDays, Clock3, GlassWater, MapPin, Navigation, UtensilsCrossed } from 'lucide-react';
import { EVENT } from '../config.js';

const ICON = { size: 20, strokeWidth: 1.25, 'aria-hidden': true };

export default function CelebrationDetails() {
  const rows = [
    { icon: <GlassWater {...ICON} />, label: 'Celebración', value: EVENT.celebration },
    { icon: <CalendarDays {...ICON} />, label: 'Fecha', value: <time dateTime="2026-10-31">{EVENT.date}</time> },
    { icon: <Clock3 {...ICON} />, label: 'Hora', value: <time dateTime={EVENT.dateISO}>{EVENT.time}</time> },
    { icon: <UtensilsCrossed {...ICON} />, label: 'Lugar', value: EVENT.venue },
  ];

  return (
    <section className="invite" aria-labelledby="invite-title">
      <div className="invite__inner">
        <h2 id="invite-title" className="invite__title">Y ahora… ¡a celebrarlo!</h2>
        <p className="invite__subtitle">Una comida para brindar por esta nueva etapa.</p>
        <p className="invite__intro">
          Nos encantará compartir contigo este momento tan especial. Hemos preparado una comida para
          celebrar tu jubilación como se merece, rodeados de buenos momentos, cariño y muchas ganas
          de disfrutar.
        </p>

        <h3 className="invite__label">Detalles de la celebración</h3>
        <dl className="details">
          {rows.map((r) => (
            <div className="details__row" key={r.label}>
              <span className="details__icon">{r.icon}</span>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>

        <div className="place">
          <span className="place__pin" aria-hidden="true">
            <MapPin size={22} strokeWidth={1.25} />
          </span>
          <div className="place__text">
            <p className="place__name">{EVENT.venue}</p>
            <address className="place__address">{EVENT.address}</address>
          </div>
          <a
            className="button button--outline place__button"
            href={EVENT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Navigation size={16} strokeWidth={1.5} aria-hidden="true" />
            Cómo llegar
            <span className="visually-hidden"> (se abre Google Maps en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
