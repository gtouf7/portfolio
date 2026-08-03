import './styles/about-skills.css'
import { useLang } from '../src/LanguageContext.jsx'

export default function AboutSkills() {
  const { t } = useLang();
  return (
    <section id="about" className="section block about-grid" data-reveal>
      <div>
        <div className="section-head">
          <span className="section-num">03</span>
          <h2>{t.aboutTitle}</h2>
        </div>
        <p className="about-p">{t.aboutP1}</p>
        <p className="about-p">{t.aboutP2}</p>
      </div>
      <div className="skills-grid">
        {t.skillGroups.map((g) => (
          <div key={g.title}>
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
