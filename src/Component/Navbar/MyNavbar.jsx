// import React from "react";
// import "../../Component/Navbar/MyNavbar.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function MyNavbar() {
//   return (
//     <>
//       <Navbar className="my-nav">
//         <Nav>
//           <Nav.Link href="#about" className="active">
//             About Me
//           </Nav.Link>
//           <Nav.Link href="#skills">Skills</Nav.Link>
//           <Nav.Link href="#projects">Projects</Nav.Link>
//           <Nav.Link href="#gallery">Gallery</Nav.Link>
//           <Nav.Link href="#resume">Resume</Nav.Link>
//           <Nav.Link href="#contact">Contact Me</Nav.Link>
//         </Nav>
//       </Navbar>
//     </>
//   );
// }

// export default MyNavbar;

import React, { useEffect, useState } from "react";
import "../../Component/Navbar/MyNavbar.css";

function MyNavbar() {
  const [activeSection, setActiveSection] = useState("about");

  // تشخیص سکشن فعال موقع اسکرول
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

  // اسکرول نرم به سکشن مربوطه
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
