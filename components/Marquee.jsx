import './styles/marquee.css'
import { useLang } from '../src/LanguageContext.jsx'

export default function Marquee() {
  const { t } = useLang();
  const row = [...t.marquee, ...t.marquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}<span className="marquee-sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
