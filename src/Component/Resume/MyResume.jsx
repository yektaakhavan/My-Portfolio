import "../../Component/Resume/MyResume.css";
import ResumeFile from "../../assets/pdf/Yekta-Akhavan-Safaei-FrontEnd-en.pdf";

function MyResume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-card">
        <h2 className="section-title">Resume</h2>

        <p className="resume-text">
          Here's my latest up-to-date resume including work experience,
          tech-stack, education, and contact info. Feel free to download or view
          it online.
        </p>

        <div className="resume-buttons">
          <a
            href={ResumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn view"
          >
            <i className="fas fa-eye"></i> View Online
          </a>

          <a href={ResumeFile} download className="resume-btn download">
            <i className="fas fa-download"></i> Download
          </a>
        </div>

        <div className="resume-skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>Responsive UI</span>
        </div>
      </div>
    </section>
  );
}

export default MyResume;
