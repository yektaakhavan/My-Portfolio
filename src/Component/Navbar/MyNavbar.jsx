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
  const [activeSection, setActiveSection] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const sections = [
    { id: "about", icon: <FaUser /> },
    { id: "skills", icon: <FaCode /> },
    { id: "projects", icon: <FaProjectDiagram /> },
    { id: "gallery", icon: <FaImages /> },
    { id: "resume", icon: <FaFileAlt /> },
    { id: "contact", icon: <FaEnvelope /> },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaTelegramPlane />, url: "https://t.me" },
    { icon: <IoMail />, url: "mailto:test@example.com" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <>
      <nav className="my-nav">
        {!isMobile && (
          <div className="social-bar">
            {socialLinks.map(({ icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                {icon}
              </a>
            ))}
          </div>
        )}

        {isMobile ? (
          <button
            className="hamburger-btn"
            onClick={() => setShowOffcanvas(true)}
          >
            <FaBars />
          </button>
        ) : (
          <div className="menu">
            {sections.map(({ id, icon }) => (
              <button
                key={id}
                className={`menu-link ${activeSection === id ? "active" : ""}`}
                onClick={() => scrollToSection(id)}
              >
                {icon}
              </button>
            ))}
          </div>
        )}
      </nav>

      {showOffcanvas && (
        <div
          className="offcanvas-overlay"
          onClick={() => setShowOffcanvas(false)}
        >
          <div
            className="offcanvas-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="offcanvas-header">
              <h3>Menu</h3>
              <button
                className="close-btn"
                onClick={() => setShowOffcanvas(false)}
              >
                ✕
              </button>
            </div>

            <div className="offcanvas-links">
              {sections.map(({ id, icon }) => (
                <button
                  key={id}
                  className={`offcanvas-link ${
                    activeSection === id ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(id);
                    setShowOffcanvas(false); // ✅ بسته‌شدن منو بعد از کلیک
                  }}
                >
                  <span className="icon">{icon}</span>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>

            <div className="offcanvas-socials">
              {socialLinks.map(({ icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyNavbar;
