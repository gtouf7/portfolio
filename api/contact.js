const TO_EMAIL = 'georgetouf7@gmail.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { from_name, reply_to, message } = req.body ?? {};

  if (!from_name || !reply_to || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!EMAIL_PATTERN.test(reply_to)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [TO_EMAIL],
        reply_to,
        subject: `New message from ${from_name} via touf.me`,
        text: `From: ${from_name} <${reply_to}>\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error('Resend error:', await response.text());
      return res.status(502).json({ error: 'Failed to send message' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}