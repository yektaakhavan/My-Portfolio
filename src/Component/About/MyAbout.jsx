import React from "react";
import "../../Component/About/MyAbout.css";
import MyPicture from "../../assets/images/myPicture/ResizeProfileImage.jpg";

function MyAbout() {
  return (
    <section id="about">
      <img src={MyPicture} alt="Yekta Akhavan" />
      <div id="about-text">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm Yekta Akhavan, a passionate and hard-working front-end developer
          who has been seriously learning and working in this field for the past
          few months. I started as a self-taught developer and now I’m focusing
          deeply on React and building real-world projects to sharpen my skills.
        </p>
        <p>
          I’m highly interested in joining professional teams and contributing
          to dynamic, creative environments. My enthusiasm for continuous
          learning and hands-on experience fuels my journey toward becoming a
          professional front-end developer.
        </p>
      </div>
    </section>
  );
}

export default MyAbout;
