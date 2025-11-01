import "../../Component/Header/MyHeader.css"
import Container from "react-bootstrap/esm/Container";
import LogoFull from "../../assets/images/logo/logo-full2.webp";

function MyHeader() {
  return (
    <>
      <header className="bg-dark text-light">
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
