import styles from "./TechList.module.css";

function TechList({ techStack }) {
  return (
    <div className={styles.techList}>
      {techStack.map((tech, ind) => (
        <div key={ind}>
          <img src={tech.techImg} alt={`${tech.tech} icon`} />
        </div>
      ))}
    </div>
  );
}

export default TechList;
