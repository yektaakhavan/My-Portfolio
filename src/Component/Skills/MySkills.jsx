import "../../Component/Skills/MySkills.css";

const skillsData = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "SASS", icon: "fab fa-sass" },
  { name: "Bootstrap", icon: "fab fa-bootstrap" },
  { name: "Responsive Design", icon: "fas fa-laptop-code" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "React", icon: "fab fa-react" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "GitHub", icon: "fab fa-github" },
];

function MySkills() {
  return (
    <>
      <section id="skills">
        <h2 className="section-title">Skills</h2>
        {skillsData.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </section>
    </>
  );
}

export default MySkills;
