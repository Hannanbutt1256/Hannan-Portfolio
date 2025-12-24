import React from "react";
import styles from "./Experience.module.css";
import { portfolioData } from "../../data/portfolio";

const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h1 className="sectionTitle">Experience</h1>
            <div className={styles.experienceList}>
                {portfolioData.experience.map((exp, index) => (
                    <div key={index} className={styles.card}>
                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                        <span className={styles.date}>{exp.duration}</span>
                        <p className="location">{exp.location}</p>
                        <ul className={styles.description}>
                            {exp.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
