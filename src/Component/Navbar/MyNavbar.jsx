import React, { useEffect, useState } from "react";
import "../../Component/Navbar/MyNavbar.css";
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaImages,
  FaFileAlt,
  FaEnvelope,
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function MyNavbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    if (showOffcanvas) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showOffcanvas]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("main section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) current = section.getAttribute("id");
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { id: "about", icon: <FaUser /> },
    { id: "skills", icon: <FaCode /> },
    { id: "projects", icon: <FaProjectDiagram /> },
    { id: "gallery", icon: <FaImages /> },
    { id: "resume", icon: <FaFileAlt /> },
    { id: "contact", icon: <FaEnvelope /> },
  ];

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
    <>
      {/* Desktop Navigation */}
      <nav className={`my-nav desktop-nav ${scrolled ? "scrolled" : ""}`}>
        {sections.map(({ id, icon }) => (
          <button
            key={id}
            className={`nav-link ${activeSection === id ? "active" : ""}`}
            onClick={() => scrollToSection(id)}
          >
            <span className="icon">{icon}</span>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav className={`my-nav mobile-nav ${scrolled ? "scrolled" : ""}`}>
        <button
          className="hamburger-btn"
          onClick={() => setShowOffcanvas(true)}
        >
          <div className="dots-icon">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="dot"></span>
            ))}
          </div>
        </button>
      </nav>

      {/* Offcanvas Menu */}
      <div className={`offcanvas-menu ${showOffcanvas ? "active" : ""}`}>
        <div
          className="offcanvas-overlay"
          onClick={() => setShowOffcanvas(false)}
        ></div>
        <div className="offcanvas-content">
          <button className="close-btn" onClick={() => setShowOffcanvas(false)}>
            &times;
          </button>

          <div className="offcanvas-links">
            {sections.map(({ id, icon }) => (
              <button
                key={id}
                className={`offcanvas-link ${
                  activeSection === id ? "active" : ""
                }`}
                onClick={() => {
                  scrollToSection(id);
                  setShowOffcanvas(false);
                }}
              >
                <span className="icon">{icon}</span>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Social Links in Mobile Menu */}
          <div className="offcanvas-social">
            <h4>Connect with me</h4>
            <div className="social-links-mobile">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-mobile"
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyNavbar;
