import MyPicture from "../../assets/images/myPicture/personal-profile.png";
import { FaUserAlt, FaLightbulb, FaRocket } from "react-icons/fa";

const badges = [
  { icon: FaRocket, label: "Fast Learner" },
  { icon: FaLightbulb, label: "Problem Solver" },
  { icon: FaUserAlt, label: "Team Friendly" },
];

function MyAbout() {
  return (
    <section
      id="about"
      className="mb-20 grid grid-cols-1 items-center gap-10 px-4 text-center md:grid-cols-[1fr_1.2fr] md:gap-12 md:text-left"
    >
      <div className="relative mx-auto flex justify-center">
        <div className="rounded-[18px] bg-gradient-to-br from-gold/20 to-transparent p-1.5 transition hover:-translate-y-1">
          <img
            src={MyPicture}
            alt="Portrait of Yekta Akhavan"
            className="h-[350px] w-full max-w-[300px] rounded-2xl object-cover shadow-[0_8px_25px_rgba(126,88,204,0.45)] transition duration-300 hover:shadow-[0_12px_35px_rgba(225,198,153,0.25)] sm:h-[500px] sm:max-w-[400px]"
          />
        </div>
        <span
          aria-hidden="true"
          className="absolute left-[60%] top-[10%] -z-10 h-[230px] w-[230px] rounded-full bg-gold/15 blur-[90px]"
        />
      </div>

      <div>
        <h2 className="mb-4 text-3xl font-bold text-gold sm:text-4xl">About Me</h2>
        <p className="mt-2 text-base leading-relaxed text-lilac-soft sm:text-lg">
          Hello! I'm <span className="font-semibold text-gold">Yekta</span>, a
          Frontend Developer passionate about turning ideas into clean,
          modern, and functional user interfaces.
        </p>
        <p className="mt-2 text-base leading-relaxed text-lilac-soft sm:text-lg">
          I began through online courses and self-learning, discovering a love
          for both design and logic. I enjoy crafting solutions that feel good
          to use.
        </p>
        <p className="mt-2 text-base leading-relaxed text-lilac-soft sm:text-lg">
          Currently, I'm looking to collaborate with professional teams to
          gain real-world experience and sharpen my skills even further.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-full border border-gold/20 bg-white/5 px-3.5 py-1.5 text-sm transition hover:-translate-y-0.5 hover:border-gold"
            >
              <Icon /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyAbout;
