import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { MdDevices, MdDesignServices } from "react-icons/md";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

import AuthorPort1 from "../assets/images/projectImage/AuthorPortfolio/home-page.webp";
import AuthorPort2 from "../assets/images/projectImage/AuthorPortfolio/about-page.webp";
import AuthorPort3 from "../assets/images/projectImage/AuthorPortfolio/book-page.webp";
import AuthorPort4 from "../assets/images/projectImage/AuthorPortfolio/articles-page.webp";
import AuthorPort5 from "../assets/images/projectImage/AuthorPortfolio/article-page.webp";
import AuthorPort6 from "../assets/images/projectImage/AuthorPortfolio/contact-page.webp";
import AuthorPort7 from "../assets/images/projectImage/AuthorPortfolio/responsive.webp";

import Coffee1 from "../assets/images/projectImage/CoffeeListing/CoffeeListing (1).webp";
import Coffee2 from "../assets/images/projectImage/CoffeeListing/CoffeeListing (2).webp";
import Coffee3 from "../assets/images/projectImage/CoffeeListing/CoffeeListing (3).webp";

import ToDoApp1 from "../assets/images/projectImage/ToDoApp/ToDoApp (2).webp";
import ToDoApp2 from "../assets/images/projectImage/ToDoApp/ToDoApp (1).webp";

import trackingdash1 from "../assets/images/projectImage/Time-tracking-dashboard/Time-tracking-dashboard.webp";
import trackingdash2 from "../assets/images/projectImage/Time-tracking-dashboard/responsive-Time-tracking-dashboard.webp";

import CoffeLand1 from "../assets/images/projectImage/the-coffee-land/the-coffe-land01.webp";
import CoffeLand2 from "../assets/images/projectImage/the-coffee-land/the-coffe-land02.webp";
import CoffeLand3 from "../assets/images/projectImage/the-coffee-land/the-coffe-land03.webp";
import CoffeLand4 from "../assets/images/projectImage/the-coffee-land/the-coffe-land04.webp";
import CoffeLand5 from "../assets/images/projectImage/the-coffee-land/the-coffe-land05.webp";
import CoffeLand6 from "../assets/images/projectImage/the-coffee-land/the-coffe-land06.webp";
import CoffeLand7 from "../assets/images/projectImage/the-coffee-land/the-coffe-land07.webp";
import CoffeLand8 from "../assets/images/projectImage/the-coffee-land/the-coffe-land08.webp";
import CoffeLand9 from "../assets/images/projectImage/the-coffee-land/the-coffe-land09.webp";
import CoffeLand10 from "../assets/images/projectImage/the-coffee-land/the-coffe-land10.webp";
import CoffeLandVideo from "../assets/images/projectImage/the-coffee-land/the-coffe-land.webm";

import taskTracker1 from "../assets/images/projectImage/Project-task-tracker/The-Atelier-Ledger-lg.webp";
import taskTracker2 from "../assets/images/projectImage/Project-task-tracker/The-Atelier-Ledger-xs.webp";

import VataskTracker1 from "../assets/images/projectImage/vanilla-project-task-tracker/vanilla-project-task-tracker-lg.webp";
import VataskTracker2 from "../assets/images/projectImage/vanilla-project-task-tracker/vanilla-project-task-tracker-xs.webp";


export const categories = [
  { key: "all", label: "All" },
  { key: "react", label: "React" },
  { key: "tailwind", label: "Tailwind" },
  { key: "bootstrap", label: "Bootstrap" },
  { key: "vanilla", label: "Vanilla JS" },
];


export const projectsData = [
  {
    id: "project5",
    name: "The Coffee Land",
    github: "https://github.com/yektaakhavan/The-Coffee-Land",
    demo: "https://the-coffee-land.vercel.app/",
    category: ["react", "tailwind"],
    images: [
      { src: CoffeLand1, alt: "The Coffee Land – Home page" },
      { src: CoffeLand2, alt: "The Coffee Land – Shop page" },
      { src: CoffeLand3, alt: "The Coffee Land – Product page" },
      { src: CoffeLand4, alt: "The Coffee Land – Blog page" },
      { src: CoffeLand5, alt: "The Coffee Land – About page" },
      { src: CoffeLand6, alt: "The Coffee Land – Contact page" },
      { src: CoffeLand7, alt: "The Coffee Land – Cart page" },
      { src: CoffeLand8, alt: "The Coffee Land – Cart page" },
      { src: CoffeLand9, alt: "The Coffee Land – Cart page" },
      { src: CoffeLand10, alt: "The Coffee Land – Cart page" },
      { src: CoffeLandVideo, alt: "The Coffee Land – Video presentation" },
    ],
    description:
      "A coffee shop landing page covering the full shopping flow — home, product listing, product details and cart — built with a strong focus on visual design.",
    technologies: [FaHtml5, FaCss3Alt, FaJsSquare, MdDevices, TbApi,SiTailwindcss],
  },
  {
    id: "project3",
    name: "Author-Portfolio",
    github: "https://github.com/yektaakhavan/Author-portfolio",
    demo: "https://www.akhavan-safaei.ir/",
    category: ["react", "bootstrap"],
    images: [
      { src: AuthorPort1, alt: "Author Portfolio – Home page" },
      { src: AuthorPort2, alt: "Author Portfolio – About page" },
      { src: AuthorPort3, alt: "Author Portfolio – Book page" },
      { src: AuthorPort4, alt: "Author Portfolio – Articles page" },
      { src: AuthorPort5, alt: "Author Portfolio – Article page" },
      { src: AuthorPort6, alt: "Author Portfolio – Contact page" },
      { src: AuthorPort7, alt: "Author Portfolio – Responsive view" },
    ],
    description:
      "A personal website for an author, featuring biography details, book information, and sample content, providing users with a clear and structured browsing experience.",
    technologies: [
      FaReact,
      FaBootstrap,
      FaCss3Alt,
      MdDevices,
      MdDesignServices,
    ],
  },
  {
    id: "project6",
    name: "Project Task Tracker",
    github: "https://github.com/yektaakhavan/Project-Task-Tracker",
    demo: "https://project-task-tracker-one.vercel.app/",
    category: ["tailwind", "react"],
    images: [
      { src: taskTracker1, alt: "Project Task Tracker – screen 1" },
      { src: taskTracker2, alt: "Project Task Tracker – screen 2" },
    ],
    description:
      "A React + Tailwind CSS task tracker designed as a private studio's bound ledger rather than a generic SaaS dashboard: a dark charcoal stage, one inset ivory paper panel, brass as the only accent metal, and priority recorded as a stamped wax seal instead of a colored chip.",
    technologies: [FaReact, SiTailwindcss, MdDevices, TbBrandFramerMotion],
  },
  {
    id: "project7",
    name: "Vanilla-Project-Task-Tracker",
    github: "https://github.com/yektaakhavan/Vanilla-Project-Task-Tracker",
    demo: "https://yektaakhavan.github.io/Vanilla-Project-Task-Tracker/",
    category: ["vanilla"],
    images: [
      {
        src: VataskTracker1,
        alt: "Vanilla Project Task Tracker – desktop view",
      },
      {
        src: VataskTracker2,
        alt: "Vanilla Project Task Tracker – responsive view",
      },
    ],
    description:
      "A simple project task tracker built with vanilla HTML, CSS, and JavaScript.",
    technologies: [FaHtml5, FaCss3Alt, FaJsSquare, MdDevices, TbApi],
  },
  {
    id: "project1",
    name: "coffee-listing",
    github: "https://github.com/yektaakhavan/coffee-listing",
    demo: "https://yektaakhavan.github.io/coffee-listing/",
    category: ["react"],
    images: [
      { src: Coffee1, alt: "Coffee listing – screen 1" },
      { src: Coffee2, alt: "Coffee listing – screen 2" },
      { src: Coffee3, alt: "Coffee listing – screen 3" },
    ],
    description:
      "A coffee listing interface that presents product details and pricing, streamlining the process of reviewing options and making selections efficiently.",
    technologies: [FaReact, FaCss3Alt, MdDevices, TbApi],
  },
  {
    id: "project2",
    name: "react-ToDoApp",
    github: "https://github.com/yektaakhavan/react-ToDoApp",
    demo: "https://yektaakhavan.github.io/react-ToDoApp/",
    category: ["react"],
    images: [
      { src: ToDoApp1, alt: "React ToDo App – screen 1" },
      { src: ToDoApp2, alt: "React ToDo App – screen 2" },
    ],
    description:
      "A task management application that enables adding, removing, and completing tasks, supporting effective daily organization and planning.",
    technologies: [FaReact, FaCss3Alt, MdDevices],
  },
  {
    id: "project4",
    name: "Time-tracking-dashboard",
    github: "https://github.com/yektaakhavan/Time-tracking-dashboard",
    demo: "https://yektaakhavan.github.io/Time-tracking-dashboard/",
    category: ["vanilla"],
    images: [
      { src: trackingdash1, alt: "Time tracking dashboard – desktop view" },
      { src: trackingdash2, alt: "Time tracking dashboard – responsive view" },
    ],
    description:
      "A time-tracking dashboard that displays activity data across different time periods, offering valuable insights into productivity patterns and time usage.",
    technologies: [FaHtml5, FaCss3Alt, FaJsSquare, MdDevices, TbApi],
  },
];
