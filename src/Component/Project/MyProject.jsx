import { useState } from "react";
import { projectsData, categories } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt, FaImages } from "react-icons/fa";

function MyProject({ setSelectedProjectImages }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category?.includes(activeFilter));

  return (
    <section id="projects" className="mb-20">
      <h2 className="mb-8 text-center text-3xl font-bold text-gold sm:text-4xl">
        Projects
      </h2>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`rounded-full border-2 px-5 py-2 text-sm font-bold transition ${
              activeFilter === cat.key
                ? "border-transparent bg-gradient-to-br from-[#c4a0df]/90 to-gold-soft/90 text-ink shadow-[0_0_10px_var(--color-gold)]"
                : "border-gold text-gold hover:-translate-y-0.5 hover:bg-gold/15"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-[20px] bg-gradient-to-br from-ink-light to-plum shadow-[0_6px_20px_rgba(126,88,204,0.6)] transition hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(126,88,204,0.9)]"
          >
            <button
              onClick={() => setSelectedProjectImages(project.images)}
              className="relative block aspect-video w-full overflow-hidden"
              aria-label={`Show screenshots of ${project.name}`}
            >
              <img
                src={project.images[0]?.src}
                alt={project.images[0]?.alt || project.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center gap-2 bg-ink/0 text-sm font-bold text-transparent opacity-0 backdrop-blur-0 transition group-hover:bg-ink/50 group-hover:text-gold-soft group-hover:opacity-100 group-hover:backdrop-blur-[1px]">
                <FaImages /> View screenshots
              </span>
              {project.images.length > 1 && (
                <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-semibold text-gold backdrop-blur-sm">
                  {project.images.length} photos
                </span>
              )}
            </button>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 text-xl font-bold text-gold-soft drop-shadow-[0_0_4px_rgba(243,229,171,0.4)]">
                {project.name}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-lilac-soft">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2.5">
                {project.technologies.map((Icon, i) => (
                  <Icon key={i} className="text-lg text-gold transition hover:scale-110" />
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2.5 pt-1">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#c4a0df]/90 to-gold-soft/90 px-4 py-1.5 text-xs font-bold text-ink shadow-[0_0_8px_var(--color-gold)] transition hover:-translate-y-0.5"
                >
                  <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 px-4 py-1.5 text-xs font-bold text-gold transition hover:-translate-y-0.5 hover:bg-gold/10"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-lilac-soft">
          No projects with this technology have been added yet.
        </p>
      )}

      <div className="mt-10 text-center">
        <a
          href="https://github.com/yektaakhavan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-ink shadow-[0_0_10px_var(--color-gold)] transition hover:-translate-y-0.5 hover:bg-[#c9b26e]"
        >
          <FaGithub /> View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}

export default MyProject;
