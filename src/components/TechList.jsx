import styles from "./TechList.module.css";

function TechList({ techStack, shortDescription }) {
  return (
    <div className={styles.techList}>
      <div className={styles.techListContainer}>
        {techStack.map((tech, ind) => (
          <div className={styles.techIcon} key={ind}>
            <img src={tech.techImg} alt={`${tech.tech} icon`} />
          </div>
        ))}
      </div>
      <p>{shortDescription}</p>
    </div>
  );
}

export default TechList;
