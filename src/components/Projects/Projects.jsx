import ProjectCard from "../../common/ProjectCard";
import { portfolioData } from "../../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-text-muted">
            A selection of work spanning AI, full-stack apps, and data science.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={index}
              links={project.links}
              title={project.title}
              description={project.description}
              techUsed={project.techUsed}
              isFeatured={project.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
