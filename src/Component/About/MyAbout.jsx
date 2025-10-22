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
          I’m Yekta Akhavan. Due to my personal interest in web design and
          programming, I chose the front-end path. By following various courses
          and self-learning, I have been able to advance in this field.
        </p>
        <p>
          Now, to gain experience and further improve my skills, I am seeking
          opportunities to work with professional programming teams and
          companies.
        </p>
        <p>
          Ultimately, I am passionate about combining design and technology to
          create beautiful and functional user experiences.
        </p>
      </div>
    </section>
  );
}

export default MyAbout;
