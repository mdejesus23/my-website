import styles from "./TechList.module.css";

function TechList({ techStack }) {
  return (
    <div className={styles.techList}>
      {techStack.map((tech, ind) => (
        <div className={styles.tech} key={ind}>
          ⭐{tech}
        </div>
      ))}
    </div>
  );
}

export default TechList;
