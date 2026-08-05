import './styles/contact.css'
import { useRef, useState } from 'react'
import { useLang } from '../src/LanguageContext.jsx'

export default function Contact() {
  const { t } = useLang();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
  e.preventDefault();
  //console.log('submit fired'); 
  setStatus('sending');
  try {
    const formData = new FormData(formRef.current);
    const payload = {
      from_name: formData.get('from_name'),
      reply_to: formData.get('reply_to'),
      message: formData.get('message'),
    };
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('Request failed');
    setStatus('success');
    formRef.current.reset();
  } catch (err) {
    console.error('Contact form submit error:', err);
    setStatus('error');
  }
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