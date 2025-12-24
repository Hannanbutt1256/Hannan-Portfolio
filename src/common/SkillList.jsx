import styles from "./SkillList.module.css";

export default function SkillList({ skill }) {
  return (
    <span className={styles.skillBadge}>
      {skill}
    </span>
  );
}
