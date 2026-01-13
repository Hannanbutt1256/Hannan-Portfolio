import React, { useState } from "react";
import styles from "./HeroStyles.module.css";
import linkedInIcon from "../../assets/linkedin-dark.svg";
import githubIcon from "../../assets/github-dark.svg";
import kaggleIcon from "../../assets/kaggle-dark.svg";
import { portfolioData } from "../../data/portfolio";
import ResumePreview from "../ResumePreview/ResumePreview";

function Hero() {
  const { hero } = portfolioData;
  const [showResume, setShowResume] = useState(false);

  return (
    <section className={styles.container} id="hero">
      <div className={styles.info}>
        <h1>Hi, I’m <span className={styles.gradientText}>{hero.name}</span> <span className={styles.wavingHand}>👋🏻</span></h1>
        <h2>{hero.role}</h2>
        <h3 className={styles.subHeadline}>{hero.subHeadline}</h3>

        <div className={styles.socials}>
          <a href={hero.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" className={styles.icon} />
          </a>
          <a href={hero.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github" className={styles.icon} />
          </a>
          <a href={hero.socialLinks.kaggle} target="_blank" rel="noopener noreferrer">
            <img src={kaggleIcon} alt="Kaggle" className={styles.icon} />
          </a>
        </div>

        <p className={styles.description}>{hero.summary}</p>

        <div className={styles.actions}>
          <button
            className={`${styles.btn} hover`}
            onClick={() => setShowResume(true)}
          >
            View Resume
          </button>
          <a href="#contact">
            <button className={`${styles.btn} ${styles.btnOutline} hover`}>
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {showResume && (
        <ResumePreview
          resumeLink={hero.resumeLink}
          onClose={() => setShowResume(false)}
        />
      )}
    </section>
  );
}

export default Hero;
