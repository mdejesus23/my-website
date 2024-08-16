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
        These are some of the projects I've developed, showcasing both personal
        and client work. They include a full-stack web application and a static
        site generated with the Astro framework, enhanced with React for
        interactive components. These projects highlight my ability to deliver
        dynamic, responsive, and user-focused solutions across various
        technologies.
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
