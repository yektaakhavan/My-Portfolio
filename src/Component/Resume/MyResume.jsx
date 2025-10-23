import "../../Component/Resume/MyResume.css";
import Nav from "react-bootstrap/Nav";
import ResumeFile from "../../assets/pdf/Yekta-Akhavan-Safaei-FrontEnd-en.pdf";

function MyResume() {
  return (
    <section id="resume">
      <h2 className="section-title">Resume</h2>
      <p>
        You can download my latest resume to see my experiences and skills in
        detail.
      </p>

      
      <Nav.Link
        href={ResumeFile}
        className="resume-download-btn"
        download
      >
        <i className="fas fa-download"></i> Download Resume
      </Nav.Link>
    </section>
  );
}

export default MyResume;
