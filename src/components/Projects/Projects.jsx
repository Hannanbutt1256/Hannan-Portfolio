import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import { portfolioData } from "../../data/portfolio";

function Projects() {
  // Find project marked as featured, or fallback to the first one
  const featured = portfolioData.projects.find(p => p.isFeatured) || portfolioData.projects[0];

  // Filter out the featured project from the rest of the list
  const rest = portfolioData.projects.filter(p => p !== featured);

  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Projects</h2>

      {/* Featured Project */}
      {featured && (
        <div className={styles.featured}>
          <ProjectCard
            links={featured.links}
            title={featured.title}
            description={featured.description}
            techUsed={featured.techUsed}
            isFeatured={true}
          />
        </div>
      )}

      {/* Other Projects */}
      <div className={styles.projectsGrid}>
        {rest.map((project, index) => (
          <ProjectCard
            key={index}
            links={project.links}
            title={project.title}
            description={project.description}
            techUsed={project.techUsed}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
