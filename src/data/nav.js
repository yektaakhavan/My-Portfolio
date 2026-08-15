import { FaUser, FaCode, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa";

// آیتم‌های ناوبری. همه از نوع "scroll" هستن (اسکرول به یک سکشن تو صفحه‌ی اصلی).
export const navSections = [
  { id: "about", label: "About", icon: FaUser, type: "scroll" },
  { id: "skills", label: "Skills", icon: FaCode, type: "scroll" },
  { id: "projects", label: "Projects", icon: FaProjectDiagram, type: "scroll" },
  { id: "resume", label: "Resume", icon: FaFileAlt, type: "scroll" },
  { id: "contact", label: "Contact", icon: FaEnvelope, type: "scroll" },
];
