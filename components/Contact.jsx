import './styles/contact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLang } from '../src/LanguageContext.jsx'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const { t } = useLang();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => { setStatus('success'); formRef.current.reset(); },
      () => { setStatus('error'); }
    );
  };

  return (
    <section id="contact" className="section block" data-reveal>
      <div className="contact-card">
        <div>
          <h2>{t.contactTitle}</h2>
          <p className="contact-lede">{t.contactLede}</p>
          <a className="contact-email" href="mailto:georgetouf7@gmail.com">georgetouf7@gmail.com</a>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="from_name" placeholder={t.fName} required />
          <input type="email" name="reply_to" placeholder={t.fEmail} required />
          <textarea name="message" rows="4" placeholder={t.fMessage} required />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? t.fSending : t.fSend}
          </button>
          <div role="status" aria-live="polite" className="contact-feedback">
            {status === 'success' && t.fSuccess}
            {status === 'error' && (
              <>{t.fError}<a href="mailto:georgetouf7@gmail.com">georgetouf7@gmail.com</a></>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
