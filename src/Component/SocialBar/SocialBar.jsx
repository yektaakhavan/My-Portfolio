import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./SocialBar.css";

function SocialBar() {
  return (
    <div className="socialBarContainer">
      <div className="socialBar">
        <a href="https://github.com/yektaakhavan" data-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yekta-akhavan" data-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://t.me/yektaa_akhavan" data-label="Telegram">
          <FaTelegramPlane />
        </a>
        <a href="mailto:yekta.akhavan.dev@gmail.com" data-label="Email">
          {" "}
          <IoMail />
        </a>
      </div>
    </div>
  );
}

export default SocialBar;
