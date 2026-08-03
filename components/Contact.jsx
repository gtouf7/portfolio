import "./styles/contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setStatus("success");
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      }
    );
  };

  return (
    <div id="contact">
      <h2>Contact</h2>
      <p className="contact-intro">
        Have a project in mind or just want to say hi? Send me a message.
      </p>
      <form ref={formRef} id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" type="text" name="from_name" required />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" name="reply_to" required />

        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="6" required />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        <div role="status" aria-live="polite" className="contact-feedback">
          {status === "success" && "Message sent! I'll get back to you soon."}
          {status === "error" && (
            <>
              Something went wrong. Please email me directly at{" "}
              <a href="mailto:georgetouf7@gmail.com">georgetouf7@gmail.com</a>.
            </>
          )}
        </div>
      </form>
    </div>
  );
}
