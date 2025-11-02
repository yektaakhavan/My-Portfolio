import React from "react";
import "../../Component/Project/MyProject.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { MdDevices, MdDesignServices } from "react-icons/md";
import { TbApi } from "react-icons/tb"; //API

import AuthorPort1 from "../../assets/images/projectImage/AuthorPortfolio/home-page.webp";
import AuthorPort2 from "../../assets/images/projectImage/AuthorPortfolio/about-page.webp";
import AuthorPort3 from "../../assets/images/projectImage/AuthorPortfolio/book-page.webp";
import AuthorPort4 from "../../assets/images/projectImage/AuthorPortfolio/articles-page.webp";
import AuthorPort5 from "../../assets/images/projectImage/AuthorPortfolio/article-page.webp";
import AuthorPort6 from "../../assets/images/projectImage/AuthorPortfolio/contact-page.webp";
import AuthorPort7 from "../../assets/images/projectImage/AuthorPortfolio/responsive.webp";

import Coffee1 from "../../assets/images/projectImage/CoffeeListing/CoffeeListing (1).webp";
import Coffee2 from "../../assets/images/projectImage/CoffeeListing/CoffeeListing (2).webp";
import Coffee3 from "../../assets/images/projectImage/CoffeeListing/CoffeeListing (3).webp";

import ToDoApp1 from "../../assets/images/projectImage/ToDoApp/ToDoApp (2).webp";
import ToDoApp2 from "../../assets/images/projectImage/ToDoApp/ToDoApp (1).webp";

import trackingdash1 from "../../assets/images/projectImage/Time-tracking-dashboard/Time-tracking-dashboard.webp";
import trackingdash2 from "../../assets/images/projectImage/Time-tracking-dashboard/responsive-Time-tracking-dashboard.webp";

const projectsData = [
  {
    id: "project3",
    name: "Author-Portfolio",
    github: "https://github.com/yektaakhavan/Author-portfolio",
    demo: "https://www.akhavan-safaei.ir/",
    images: [
      { src: AuthorPort1, alt: "Project 1 Image 1" },
      { src: AuthorPort2, alt: "Project 1 Image 2" },
      { src: AuthorPort3, alt: "Project 1 Image 3" },
      { src: AuthorPort4, alt: "Project 1 Image 4" },
      { src: AuthorPort5, alt: "Project 1 Image 5" },
      { src: AuthorPort6, alt: "Project 1 Image 6" },
      { src: AuthorPort7, alt: "Project 1 Image 7" },
    ],
    description:
      "A personal website for an author, featuring biography details, book information, and sample content, providing users with a clear and structured browsing experience.",
    technologies: [
      <FaReact />,
      <FaBootstrap />,
      <FaCss3Alt />,
      <MdDevices />,
      <MdDesignServices />,
    ],
  },
  {
    id: "project1",
    name: "coffee-listing",
    github: "https://github.com/yektaakhavan/coffee-listing",
    demo: "https://yektaakhavan.github.io/coffee-listing/",
    images: [
      { src: Coffee1, alt: "Project 2 Image 1" },
      { src: Coffee2, alt: "Project 2 Image 2" },
      { src: Coffee3, alt: "Project 2 Image 3" },
    ],
    description:
      "A coffee listing interface that presents product details and pricing, streamlining the process of reviewing options and making selections efficiently.",
    technologies: [<FaReact />, <FaCss3Alt />, <MdDevices />, <TbApi />, ,],
  },
  {
    id: "project2",
    name: "react-ToDoApp",
    github: "https://github.com/yektaakhavan/react-ToDoApp",
    demo: "https://yektaakhavan.github.io/react-ToDoApp/",
    images: [
      { src: ToDoApp1, alt: "Project 3 Image 1" },
      { src: ToDoApp2, alt: "Project 3 Image 2" },
    ],
    description:
      "A task management application that enables adding, removing, and completing tasks, supporting effective daily organization and planning.",
    technologies: [<FaReact />, <FaCss3Alt />, <MdDevices />],
  },
  {
    id: "project4",
    name: "Time-tracking-dashboard",
    github: "https://github.com/yektaakhavan/Time-tracking-dashboard",
    demo: "https://yektaakhavan.github.io/Time-tracking-dashboard/",
    images: [
      { src: trackingdash1, alt: "Project 4 Image 1" },
      { src: trackingdash2, alt: "Project 4 Image 2" },
    ],
    description:
      "A time-tracking dashboard that displays activity data across different time periods, offering valuable insights into productivity patterns and time usage.",
    technologies: [
      <FaHtml5 />,
      <FaCss3Alt />,
      <FaJsSquare />,
      <MdDevices />,
      <TbApi />,
    ],
  },
];

function MyProject({ setSelectedProjectImages }) {
  const handleShowGallery = (images) => {
    setSelectedProjectImages(images);

    const gallerySection = document.getElementById("gallery");
    gallerySection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      {projectsData.map((project) => (
        <div className="project-card" key={project.id}>
          <div className="project-header">
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((icon, index) => (
                <span key={index} className="tech-icon">
                  {icon}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <button
                className="btn-demo"
                onClick={() => window.open(project.demo, "_blank")}
              >
                Live Demo
              </button>
              <button
                className="btn-github"
                onClick={() => window.open(project.github, "_blank")}
              >
                View on GitHub
              </button>
              <button
                className="btn-show-gallery"
                onClick={() => handleShowGallery(project.images)}
              >
                Show Images
              </button>
            </div>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          className="project-buttons buttons"
          onClick={() =>
            window.open("https://github.com/yektaakhavan", "_blank")
          }
        >
          View All Projects on GitHub
        </button>
      </div>
    </section>
  );
}

export default MyProject;
