import React from "react";
import styles from "./Education.module.css";
import { portfolioData } from "../../data/portfolio";

const Education = () => {
    return (
        <section id="education" className={styles.container}>
            <h2 className="sectionTitle">Education</h2>
            <div className={styles.grid}>
                {portfolioData.education.map((edu, index) => (
                    <div key={index} className={styles.card}>
                        <h3>{edu.institution}</h3>
                        <h4>{edu.degree}</h4>
                        <p>{edu.duration}</p>
                        <p className={styles.grade}>{edu.grade}</p>
                    </div>
                ))}
            </div>

            <h2 className="sectionTitle" style={{ marginTop: '4rem' }}>Certifications</h2>
            <div className={styles.grid}>
                {portfolioData.certifications.map((cert, index) => (
                    <div key={`cert-${index}`} className={styles.card}>
                        <h3>{cert.title}</h3>
                        <h4>{cert.issuer}</h4>
                        <p>{cert.date}</p>
                        <p className={styles.details}>{cert.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
