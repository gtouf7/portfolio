import './styles/hero.css'
import { useLang } from '../src/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLang();
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <h1>
          {t.h1a} <span className="accent">{t.h1aAccent}</span>
        </h1>
        <p className="hero-sub">{t.heroSub}</p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary" onClick={scrollTo('contact')}>{t.ctaPrimary}</a>
          <a href="#services" className="btn-ghost" onClick={scrollTo('services')}>{t.ctaSecondary}</a>
        </div>
      </div>
    </section>
  );
}
