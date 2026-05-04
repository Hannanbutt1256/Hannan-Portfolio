import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";
import { portfolioData } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h2 className="sectionTitle">Skills</h2>
      <div className={styles.skillsGrid}>
        {portfolioData.skills.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h3>{category.category}</h3>
            <div className={styles.skillList}>
              {category.items.map((skill, idx) => (
                <SkillList key={idx} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
