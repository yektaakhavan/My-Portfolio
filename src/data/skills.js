import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaComments,
  FaUsers,
  FaBrain,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdDevices } from "react-icons/md";

// برای اضافه کردن یک مهارت جدید فقط یک آبجکت جدید اینجا اضافه کن.
// category: یکی از "frontend" | "tools" | "soft"
// level: یکی از "Beginner" | "Intermediate" | "Advanced"
// color: رنگ برند اون تکنولوژی (برای هدر و بخش Skills هر دو استفاده می‌شه)
export const skillsData = [
  { name: "HTML5", category: "frontend", level: "Advanced", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", category: "frontend", level: "Advanced", icon: FaCss3Alt, color: "#2f74d0" },
  { name: "SASS", category: "frontend", level: "Advanced", icon: FaSass, color: "#cc6699" },
  { name: "Bootstrap", category: "frontend", level: "Advanced", icon: FaBootstrap, color: "#9b7dd4" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Responsive Design", category: "frontend", level: "Advanced", icon: MdDevices, color: "#e1c699" },
  { name: "JavaScript", category: "frontend", level: "Advanced", icon: FaJs, color: "#f7df1e" },
  { name: "TypeScript", category: "frontend", level: "Beginner", icon: SiTypescript, color: "#3178c6" },
  { name: "React", category: "frontend", level: "Intermediate", icon: FaReact, color: "#61dafb" },
  { name: "Git", category: "tools", level: "Advanced", icon: FaGitAlt, color: "#f05032" },
  { name: "GitHub", category: "tools", level: "Advanced", icon: FaGithub, color: "#e6e1f2" },
  { name: "Figma", category: "tools", level: "Intermediate", icon: FaFigma, color: "#c084fc" },
  { name: "Communication", category: "soft", level: "Advanced", icon: FaComments, color: "#e1c699" },
  { name: "Teamwork", category: "soft", level: "Advanced", icon: FaUsers, color: "#e1c699" },
  { name: "Problem Solving", category: "soft", level: "Intermediate", icon: FaBrain, color: "#e1c699" },
];

export const skillFilters = ["all", "frontend", "tools", "soft"];

export const categoryLabels = {
  frontend: "Frontend",
  tools: "Tools",
  soft: "Soft Skills",
};
