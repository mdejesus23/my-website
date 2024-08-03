import styles from "./Project.module.css";
import TechList from "./TechList";
import ProjectController from "./ProjectController";
import projectList from "../Data/projectList";
import Modal from "../ui/Modal";

function Project() {
  return (
    <section id="project" className={styles.projectSection}>
      <h2>My Projects</h2>
      <p>
        These are my unique projects which I built based on my interest and
        needs, most specially the <i>Preparation App.</i>
      </p>
      <div className={styles.projectGrid}>
        {projectList.map((proj, ind) => (
          <Modal>
            <Modal.Open id={proj.id}>
              <h3>{proj.name}</h3>
              <div className={styles.imageContainer}>
                <img src={proj.imgSrc} alt={proj.name} />
              </div>
              <TechList
                techStack={proj.techStack}
                shortDescription={proj.shortDesc}
              />
            </Modal.Open>

            <Modal.Window id={proj.id}>
              <h3>{proj.name}</h3>
              <div className={styles.imageContainer}>
                <img src={proj.imgSrc} alt={proj.name} />
              </div>
              <p className={styles.description}>{proj.description}</p>
              <ProjectController
                link={proj.link}
                videoDemo={proj.videoDemo}
                sourceCode={proj.sourceCode}
              />
            </Modal.Window>
          </Modal>
        ))}
      </div>
    </section>
  );
}

export default Project;
