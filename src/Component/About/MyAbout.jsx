// import React from "react";
// import "../../Component/About/MyAbout.css";
// import MyPicture from "../../assets/images/myPicture/ResizeProfileImage.webp";

// function MyAbout() {
//   return (
//     <section id="about">
//       <img src={MyPicture} alt="Yekta Akhavan" />
//       <div id="about-text">
//         <h2 className="section-title">About Me</h2>
//         <p>
//           I’m Yekta Akhavan. Due to my personal interest in web design and
//           programming, I chose the front-end path. By following various courses
//           and self-learning, I have been able to advance in this field.
//         </p>
//         <p>
//           Now, to gain experience and further improve my skills, I am seeking
//           opportunities to work with professional programming teams and
//           companies.
//         </p>
//         <p>
//           Ultimately, I am passionate about combining design and technology to
//           create beautiful and functional user experiences.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default MyAbout;

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
