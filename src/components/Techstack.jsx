import styles from "./Techstack.module.css";

const techStack = [
  {
    id: "01",
    name: "html",
  },
  {
    id: "02",
    name: "css",
  },
  {
    id: "03",
    name: "javascript",
  },
  {
    id: "04",
    name: "react",
  },
  {
    id: "05",
    name: "nodejs",
  },
  {
    id: "06",
    name: "express",
  },
  {
    id: "07",
    name: "sass",
  },
  {
    id: "04",
    name: "git",
  },
];

function Techstack() {
  return (
    <div className={styles.techStack}>
      {techStack.map((tech, ind) => (
        <li key={ind}>{tech.name}</li>
      ))}
    </div>
  );
}

export default Techstack;
