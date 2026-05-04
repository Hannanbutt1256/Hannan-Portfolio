import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import { portfolioData } from "../../data/portfolio";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Projects</h2>

      <div className={styles.projectsGrid}>
        {portfolioData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            links={project.links}
            title={project.title}
            description={project.description}
            techUsed={project.techUsed}
            isFeatured={false}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
