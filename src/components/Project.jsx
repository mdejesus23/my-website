import { useState } from "react";

import styles from "./Project.module.css";
import TechList from "./TechList";
import ProjectController from "./ProjectController";
import projectList from "../Data/projectList";
import Modal from "../ui/Modal";

function Project() {
  const [isOpenModal, setIsOpenModal] = useState(null);

  return (
    <section id="project" className={styles.projectSection}>
      <h2>My Projects</h2>
      <p>
        These are my unique projects which I built based on my interest and
        needs, most specially the <i>Preparation App</i> and the{" "}
        <i>Technical Documentation.</i> Please feel free to visit and explore.
      </p>
      <div className={styles.projectGrid}>
        {projectList.map((proj) => (
          <li
            onClick={() =>
              isOpenModal === proj.id
                ? setIsOpenModal(null)
                : setIsOpenModal(proj.id)
            }
          >
            <h3>{proj.name}</h3>
            <div className={styles.imageContainer}>
              <img src={proj.imgSrc} alt={proj.name} />
            </div>
            <TechList
              techStack={proj.techStack}
              shortDescription={proj.shortDesc}
            />

            {isOpenModal === proj.id && (
              <Modal>
                <h3>{proj.name}</h3>
                <div className={styles.imageContainer}>
                  <img src={proj.imgSrc} alt={proj.name} />
                </div>
                <p>{proj.description}</p>
                <ProjectController
                  link={proj.link}
                  videoDemo={proj.videoDemo}
                  sourceCode={proj.sourceCode}
                />
              </Modal>
            )}
          </li>
        ))}
      </div>
    </section>
  );
}

export default Project;
