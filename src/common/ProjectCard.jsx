import React from "react";
import styles from "./ProjectCard.module.css";
import githubIcon from "../assets/github-dark.svg";
import kaggleIcon from "../assets/kaggle-dark.svg";
import externalIcon from "../assets/external-link-dark.svg";

function ProjectCard({ links, title, description, techUsed, isFeatured = false }) {
  return (
    <div className={`${styles.card} ${isFeatured ? styles.featured : ""}`}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.techStack}>
          {techUsed && techUsed.map((tech, index) => (
            <span key={index} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
      </div>

      <div className={styles.linksContainer}>
        {links?.github && (
          <a href={links.github} target="_blank" rel="noreferrer" title="GitHub">
            <img src={githubIcon} alt="GitHub" className={styles.iconBtn} />
          </a>
        )}
        {links?.kaggle && (
          <a href={links.kaggle} target="_blank" rel="noreferrer" title="Kaggle">
            <img src={kaggleIcon} alt="Kaggle" className={styles.iconBtn} />
          </a>
        )}
        {links?.demo && (
          <a href={links.demo} target="_blank" rel="noreferrer" title="Live Demo">
            <img src={externalIcon} alt="Live Demo" className={styles.iconBtn} />
          </a>
        )}
        {links?.site && (
          <a href={links.site} target="_blank" rel="noreferrer" title="Visit Site">
            <img src={externalIcon} alt="Visit Site" className={styles.iconBtn} />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
