import ResumeFile from "../../assets/pdf/Yekta-Akhavan-FrontEnd-en.pdf";
import { FaEye, FaDownload } from "react-icons/fa";

const resumeSkills = ["React", "JavaScript", "HTML/CSS", "Responsive UI"];

function MyResume() {
  return (
    <section id="resume" className="flex justify-center py-10 text-center animate-fade-in-up">
      <div className="max-w-[630px] rounded-[18px] bg-white/5 p-8 shadow-[0_6px_20px_rgba(126,88,204,0.6)] backdrop-blur-xl sm:p-10">
        <h2 className="mb-4 text-3xl font-bold text-gold sm:text-4xl">Resume</h2>

        <p className="mb-8 leading-relaxed text-lilac-soft">
          Here's my latest up-to-date resume including work experience,
          tech-stack, education, and contact info. Feel free to download or
          view it online.
        </p>

        <div className="mb-6 flex flex-wrap justify-center gap-4">
          <a
            href={ResumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold bg-ink-light px-6 py-3 text-sm font-bold text-gold transition hover:scale-105 hover:shadow-[0_0_14px_rgba(225,198,153,0.5)]"
          >
            <FaEye /> View Online
          </a>
          <a
            href={ResumeFile}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold to-[#c9b26e] px-6 py-3 text-sm font-bold text-ink transition hover:scale-105 hover:shadow-[0_0_16px_rgba(225,198,153,0.45)]"
          >
            <FaDownload /> Download
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {resumeSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#50349c] bg-[#351d6f] px-3.5 py-1.5 text-sm text-gold transition hover:scale-105 hover:bg-[#50349c]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyResume;
