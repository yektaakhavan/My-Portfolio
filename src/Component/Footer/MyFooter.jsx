import "../../Component/Footer/MyFooter.css";
import FootLogo from "../../aasest/images/logo/logo-ya.png";

function MyFooter() {
  return (
    <footer className="my-footer">
      <img
        src={FootLogo}
        alt="YA Logo"
        style={{ width: "40px", verticalAlign: "middle", marginRight: "10px" }}
      />
      &copy; 2025 Yekta Akhavan. All rights reserved.
    </footer>
  );
}

export default MyFooter;
