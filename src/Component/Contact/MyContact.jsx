import React from "react";
import "../../Component/Contact/MyContact.css"

function MyContact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p>
        If you want to work together or just say hi, feel free to reach out:
      </p>

      {/* Email Button*/}
      <a href="mailto:yekta.akhavan.dev@gmail.com" className="email-btn">
        Send Email
      </a>

      {/*Socia lNetwork*/}
      <div className="social-links" style={{ marginTop: "2rem" }}>
        <a
          href="https://linkedin.com/in/yekta-akhavan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/yektaakhavan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <i className="fab fa-telegram"></i>
        </a>
      </div>
    </section>
  );
}

export default MyContact;
