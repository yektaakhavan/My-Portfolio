import React from "react";
import "../../Component/About/MyAbout.css";
import MyPicture from "../../assets/images/myPicture/ResizeProfileImage.webp";
import { FaUserAlt, FaLightbulb, FaRocket } from "react-icons/fa";

function MyAbout() {
  return (
    <section id="about" className="about-wrapper">
      <div className="about-image">
        <div className="image-frame">
          <img src={MyPicture} alt="Yekta Akhavan" />
        </div>
        <span className="glow-accent"></span>
      </div>

      <div id="about-text">
        <h2 className="section-title">About Me</h2>
        <p>
          Hello! I'm <span className="highlight">Yekta</span>, a Frontend
          Developer passionate about turning ideas into clean, modern, and
          functional user interfaces.
        </p>
        <p>
          I began through online courses and self-learning, discovering a love
          for both design and logic. I enjoy crafting solutions that feel good
          to use.
        </p>
        <p>
          Currently, I'm looking to collaborate with professional teams to gain
          real-world experience and sharpen my skills even further.
        </p>

        <div className="about-badges">
          <span>
            <FaRocket /> Fast Learner
          </span>
          <span>
            <FaLightbulb /> Problem Solver
          </span>
          <span>
            <FaUserAlt /> Team Friendly
          </span>
        </div>
      </div>
    </section>
  );
}

export default MyAbout;
