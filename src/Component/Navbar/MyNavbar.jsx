import React, { useEffect, useState } from "react";
import "../../Component/Navbar/MyNavbar.css";

function MyNavbar() {
  const [activeSection, setActiveSection] = useState("about");


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("main section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
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

  return (
    <nav className="my-nav">
      {["about", "skills", "projects", "gallery", "resume", "contact"].map(
        (section) => (
          <button
            key={section}
            className={`nav-link ${activeSection === section ? "active" : ""}`}
            onClick={() => scrollToSection(section)}
          >
            {section.charAt(0).toUpperCase() +
              section.slice(1).replace("-", " ")}
          </button>
        )
      )}
    </nav>
  );
}

export default MyNavbar;
