import './styles/services.css'
import { useLang } from '../src/LanguageContext.jsx'

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="section block" data-reveal>
      <div className="section-head">
        <span className="section-num">01</span>
        <h2>{t.servicesTitle}</h2>
      </div>
      <div className="services-grid">
        {t.services.map((s) => (
          <article key={s.n} className="service-card">
            <div className="service-num">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
