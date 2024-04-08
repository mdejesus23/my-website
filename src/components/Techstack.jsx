import styles from "./Techstack.module.css";

const techStack = [
  {
    id: "01",
    name: "html",
    icon: "/html.svg",
  },
  {
    id: "02",
    name: "css",
    icon: "/css.svg",
  },
  {
    id: "03",
    name: "javascript",
    icon: "/js.svg",
  },
  {
    id: "035343",
    name: "jquery",
    icon: "/jquery.svg",
  },
  {
    id: "04",
    name: "react",
    icon: "/react.svg",
  },
  {
    id: "04.1",
    name: "redux",
    icon: "/redux.svg",
  },
  {
    id: "05",
    name: "nodejs",
    icon: "/node.svg",
  },
  {
    id: "06",
    name: "express",
    icon: "/node.svg",
  },
  {
    id: "07",
    name: "sass",
    icon: "/sass.svg",
  },
  {
    id: "04",
    name: "git",
    icon: "/git.svg",
  },
  {
    id: "0351",
    name: "mongodb",
    icon: "/mongodb.svg",
  },
  {
    id: "0334244",
    name: "mysql",
    icon: "/mysql.svg",
  },
  {
    id: "5657",
    name: "aws",
    icon: "/aws.svg",
  },
];

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
