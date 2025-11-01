import "../../Component/Footer/MyFooter.css";
import FootLogo from "../../assets/images/logo/logo-ya.webp";

function MyFooter() {
  return (
    <footer className="my-footer">
      <img
        src={FootLogo}
        alt="YA Logo"
        style={{ width: "40px", verticalAlign: "middle", marginRight: "10px" }}
      />
      &copy; 2025, Designed & Built with 💜by Yekta Akhavan.
    </footer>
  );
}

export default MyFooter;
