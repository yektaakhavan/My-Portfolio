import React, { useState } from "react";
import "./ContactForm.css";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "+98 ",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+98\s?9\d{2}\s?\d{3}\s?\d{4}$/;

  const validate = (name, value) => {
    let msg = "";
    if (name === "email" && !emailRegex.test(value)) msg = "Invalid email";
    if (name === "phone" && !phoneRegex.test(value))
      msg = "Invalid Iranian number";
    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err !== "")) return;

    const mailto = `mailto:yekta.akhavan.dev@gmail.com?subject=Contact from ${
      formData.fullName
    }&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    )}`;

    window.location.href = mailto;

    setToast("Message prepared in mail app ✅");
    setTimeout(() => setToast(""), 3000);
  };

  // Social links data
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yektaakhavan",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yekta-akhavan",
      label: "LinkedIn",
    },
    {
      icon: <FaTelegramPlane />,
      url: "https://t.me/yektaa_akhavan",
      label: "Telegram",
    },
    {
      icon: <IoMail />,
      url: "mailto:yekta.akhavan.dev@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact">
      <div className="contact-wrapper">
        {toast && <div className="toast">{toast}</div>}
        <h2 className="form-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Phone (Iran format)</label>
            <input
              type="tel"
              name="phone"
              placeholder="+98 912 000 0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>

        {/* Social Links Section - Mobile Only */}
        <div className="contact-social-mobile">
          <h3>Or find me on</h3>
          <div className="social-links-contact">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-contact"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
