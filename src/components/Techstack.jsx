import styles from "./Techstack.module.css";
import techStack from "../Data/techStack";

function Techstack() {
  return (
    <div className={styles.techStack}>
      {techStack.map((tech, ind) => (
        <li key={ind}>
          <img src={tech.icon} alt={`${tech.icon} icon`} />
          <p>{tech.name}</p>
        </li>
      ))}
    </div>
  );
}

export default Techstack;
