import './styles/header.css'
import { useEffect, useState } from 'react'
import { useLang } from '../src/LanguageContext.jsx'

export default function Header() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header id="header" className={scrolled ? 'header-shadow' : ''}>
      <button type="button" className="logo" onClick={scrollToTop} aria-label="Scroll to top">
        <span className="logo-bracket">{'{'}</span>
        <span className="logo-initials">GT</span>
        <span className="logo-cursor" aria-hidden="true">_</span>
        <span className="logo-bracket">{'}'}</span>
      </button>

      <nav id="main-nav" aria-label="Primary">
        <a className="nav-item" href="#services">{t.navServices}</a>
        <a className="nav-item" href="#about">{t.navAbout}</a>
        <a className="nav-item" href="#contact">{t.navContact}</a>
      </nav>

      <div id="header-aside">
        <button type="button" className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
          {lang === 'en' ? 'EN' : 'GR'}
        </button>
        <a href="https://github.com/gtouf7" target="_blank" rel="noopener noreferrer">
          <img className="social-img" src="/img/socials/gh-fff.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/georgiostoufexis7/" target="_blank" rel="noopener noreferrer">
          <img className="social-img" src="/img/socials/li-fff.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/gtouf7" target="_blank" rel="noopener noreferrer">
          <img className="social-img" src="/img/socials/ig-fff.svg" alt="Instagram" />
        </a>
      </div>
    </header>
  );
}
