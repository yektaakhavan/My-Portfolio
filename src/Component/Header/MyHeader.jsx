import "../../Component/Header/MyHeader.css";
import Container from "react-bootstrap/esm/Container";
import LogoFull from "../../assets/images/logo/logo-full2.webp";
import DevSvg from "../../assets/images/Illustrations/web-development_0wdh.svg";
// import CodeSvg from "../../assets/images/Illustrations/code-review_jdgp.svg";
import HtmlIcon from "../../assets/images/Illustrations/left/html-file-type.svg";
import CssIcon from "../../assets/images/Illustrations/left/css-svg.svg";
import JsIcon from "../../assets/images/Illustrations/left/js-square.svg";
import ReactIcon from "../../assets/images/Illustrations/left/react-svg.svg";
import BootstrapIcon from "../../assets/images/Illustrations/left/bootstrap-fill.svg";
import ResponsiveIcon from "../../assets/images/Illustrations/left/responsive.svg";
import GithybIcon from "../../assets/images/Illustrations/left/github.svg";

function MyHeader() {
  return (
    <>
      <header className="galaxy-header">
        <div className="particles"></div>
        <div className="stars"></div>

        <img src={DevSvg} alt="" className="dev-illustration" />

        <img src={HtmlIcon} alt="" className="tech-icon tech-html" />
        <img src={CssIcon} alt="" className="tech-icon tech-css" />
        <img src={JsIcon} alt="" className="tech-icon tech-js" />
        <img src={ReactIcon} alt="" className="tech-icon tech-react" />
        <img src={BootstrapIcon} alt="" className="tech-icon tech-bootstrap" />
        <img
          src={ResponsiveIcon}
          alt=""
          className="tech-icon tech-responsive"
        />
        <img src={GithybIcon} alt="" className="tech-icon tech-github" />

        <Container>
          <img src={LogoFull} alt="Yekta Akhavan Logo" className="logo" />
          <h1>Yekta Akhavan</h1>
          <p>Frontend Developer | Creative Technologist</p>
        </Container>
      </header>
    </>
  );
}

export default MyHeader;
