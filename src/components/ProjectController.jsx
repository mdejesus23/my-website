import styles from "./ProjectController.module.css";

function ProjectController({ link, sourceCode, videoDemo }) {
  return (
    <div className={styles.projectController}>
      <a className="" href={sourceCode} target="_blank" rel="noreferrer">
        Code
      </a>
      <a className="" href={link} target="_blank" rel="noreferrer">
        Live
      </a>
      {videoDemo && (
        <a className="" href={videoDemo} target="_blank" rel="noreferrer">
          Demo
        </a>
      )}
    </div>
  );
}

export default ProjectController;
