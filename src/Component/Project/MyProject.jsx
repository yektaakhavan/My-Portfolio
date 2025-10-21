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

import AuthorPort1 from "../../aasest/images/projectImage/AuthorPortfolio/home-page.png";
import AuthorPort2 from "../../aasest/images/projectImage/AuthorPortfolio/about-page.png";
import AuthorPort3 from "../../aasest/images/projectImage/AuthorPortfolio/book-page.png";
import AuthorPort4 from "../../aasest/images/projectImage/AuthorPortfolio/articles-page.png";
import AuthorPort5 from "../../aasest/images/projectImage/AuthorPortfolio/article-page.png";
import AuthorPort6 from "../../aasest/images/projectImage/AuthorPortfolio/contact-page.png";
import AuthorPort7 from "../../aasest/images/projectImage/AuthorPortfolio/responsive.png";

import Coffee1 from "../../aasest/images/projectImage/CoffeeListing/CoffeeListing (1).png";
import Coffee2 from "../../aasest/images/projectImage/CoffeeListing/CoffeeListing (2).png";
import Coffee3 from "../../aasest/images/projectImage/CoffeeListing/CoffeeListing (3).png";

import ToDoApp1 from "../../aasest/images/projectImage/ToDoApp/ToDoApp (2).png";
import ToDoApp2 from "../../aasest/images/projectImage/ToDoApp/ToDoApp (1).png";

import trackingdash1 from "../../aasest/images/projectImage/Time-tracking-dashboard/Time-tracking-dashboard.png";
import trackingdash2 from "../../aasest/images/projectImage/Time-tracking-dashboard/responsive-Time-tracking-dashboard.png";

const projectsData = [
  {
    id: "project3",
    name: "Author-Portfolio",
    github: "https://github.com/yektaakhavan/Author-portfolio",
    demo: "https://www.akhavan-safaei.ir/",
    images: [
      { src: AuthorPort1, alt: "Project 3 Image 1" },
      { src: AuthorPort2, alt: "Project 3 Image 2" },
      { src: AuthorPort3, alt: "Project 3 Image 3" },
      { src: AuthorPort4, alt: "Project 3 Image 4" },
      { src: AuthorPort5, alt: "Project 3 Image 5" },
      { src: AuthorPort6, alt: "Project 3 Image 6" },
      { src: AuthorPort7, alt: "Project 3 Image 7" },
    ],
    description:
      "A personal website for introducing an author, their biography, and published book — includes multiple pages with a clean and responsive design.",
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
      { src: Coffee1, alt: "Project 1 Image 1" },
      { src: Coffee2, alt: "Project 1 Image 2" },
      { src: Coffee3, alt: "Project 1 Image 3" },
    ],
    description:
      "A responsive coffee listing interface built with React, using JSON data for dynamic content.",
    technologies: [<FaReact />, <FaCss3Alt />, <MdDevices />, <TbApi />, ,],
  },
  {
    id: "project2",
    name: "react-ToDoApp",
    github: "https://github.com/yektaakhavan/react-ToDoApp",
    demo: "https://yektaakhavan.github.io/react-ToDoApp/",
    images: [
      { src: ToDoApp1, alt: "Project 2 Image 1" },
      { src: ToDoApp2, alt: "Project 2 Image 2" },
    ],
    description:
      "A simple To-Do List app built with React, featuring add, delete, and mark-as-done functionalities.",
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
      "Track daily, weekly, and monthly activities with a responsive UI and dynamic data updates using Vanilla JavaScript.",
    technologies: [<FaHtml5 />, <FaCss3Alt />, <MdDevices />, <TbApi />],
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
          <p className="project-description">{project.description}</p>
          <div className="project-tech">
            {project.technologies.map((icon, index) => (
              <span key={index} className="tech-icon">
                {icon}
              </span>
            ))}
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
