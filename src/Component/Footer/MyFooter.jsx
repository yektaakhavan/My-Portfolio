import "../../Component/Footer/MyFooter.css";
import FootLogo from "../../assets/images/logo/logo-ya.webp";

function MyFooter() {
  return (
    <footer className="my-footer">
      <img src={FootLogo} alt="YA Logo" className="footer-logo" />
      &copy; 2025 — Designed & Built with 💜 by <span>Yekta Akhavan</span>
    </footer>
  );
}

export default MyFooter;
