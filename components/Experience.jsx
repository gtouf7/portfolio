import './styles/experience.css'
import { useLang } from '../src/LanguageContext.jsx'

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="section block" data-reveal>
      <div className="section-head">
        <span className="section-num">02</span>
        <h2>{t.expTitle}</h2>
      </div>
      <article className="exp-card">
        <div className="exp-top">
          <div>
            <h3>{t.expRole}</h3>
            <div className="exp-meta">
              {t.expCompany}<span className="exp-dot">·</span>{t.expType}
            </div>
          </div>
          <div className="exp-side">
            <span className="exp-badge"><span className="exp-pip" />{t.expDates}</span>
            <div className="exp-location">{t.expLocation}</div>
          </div>
        </div>
        <ul className="exp-bullets">
          {t.expBullets.map((b, i) => (
            <li key={i}><span className="exp-mark">·</span><span>{b}</span></li>
          ))}
        </ul>
      </article>
    </section>
  );
}
