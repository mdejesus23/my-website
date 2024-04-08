import { useState } from "react";

import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ArrowUp from "@mui/icons-material/KeyboardArrowUp";

import styles from "./Project.module.css";
import TechList from "./TechList";
import ProjectController from "./ProjectController";

const projectList = [
  {
    id: "p-01",
    name: "Preparation App",
    imgSrc: "/prepApp.jpg",
    link: "https://preparation-app.onrender.com/",
    description: `
      I have developed a simple preparation app for our church organization. This full-stack web application is built using Node.js, with Express serving as the backend framework, MongoDB for data storage, EJS templates for rendering HTML documents in response to client requests, and CSS for styling. Key functionalities include user signup and login features, where I've incorporated Express-session to store session data in the database and utilize sessionId in the browser's cookie. Additionally, I've implemented Content Security Policy (CSP) using the Node Helmet package and included CSRF protection to enhance the overall security of the website, and many more.. You can watch the video for demo or login using this account.. test123@gmail.com | pass: Test123 | theme passcode: asdf`,
    sourceCode: "https://github.com/mdejesus23/preparation-app",
    techStack: [
      { id: "n1", tech: "NodeJs", techImg: "/node.svg" },
      { id: "m1", tech: "MongoDB", techImg: "/mongodb.svg" },
      { id: "js101", tech: "Javascript", techImg: "/js.svg" },

      { id: "css101", tech: "CSS", techImg: "/css.svg" },
      { id: "h101", tech: "HTML", techImg: "/html.svg" },
    ],
    videoDemo:
      "https://www.loom.com/share/24b8f9eb7d6f4a0f893e6293056aad2b?sid=3cb414ce-367d-4c39-9e6c-d02360e9ecb1",
  },
  {
    id: "p1",
    name: "Food Ordering App",
    imgSrc: "/foodOrderApp.jpg",
    link: "https://food-app.melnerdz.com",
    description: `I have developed a Food Ordering App using React.js, incorporating essential concepts such as useState for state management, useReducer, useCallback, and other key React hooks. Additionally, I utilized the Fetch API to send GET requests to a Firebase server and interact with a real-time database. The app is styled using Sass, providing a visually appealing interface. Users can add items to their cart and place orders, triggering a POST request to Firebase for seamless order processing.`,
    sourceCode: "https://github.com/mdejesus23/food-app",
    techStack: [
      { id: "r1", tech: "ReactJs", techImg: "/react.svg" },
      { id: "s1", tech: "SASS", techImg: "/sass.svg" },
      { id: "h1", tech: "HTML", techImg: "/html.svg" },
    ],
    videoDemo: "",
  },
  {
    id: "p4",
    name: "Tech Documentation",
    imgSrc: "/techDocu.jpg",
    link: "https://documentation.melnerdz.com",
    description: `This is an HTML and CSS technical documentation, a comprehensive resource converted from our handy cheat sheet PDF into a user-friendly website. Accessible on any device, it provides quick references for tags, elements, selectors, and styling techniques. Elevate your coding productivity and effortlessly create stunning web pages. I have utilized grid and flexbox to showcase my capabilities in building web pages and UI from scratch.`,
    sourceCode: "https://github.com/mdejesus23/technical-doc",
    techStack: [
      { id: "js2", tech: "Javascript", techImg: "/js.svg" },
      { id: "css1", tech: "CSS", techImg: "/css.svg" },
      { id: "h3", tech: "HTML", techImg: "/html.svg" },
    ],
    videoDemo: "",
  },
];

function Project() {
  const [currentOpen, setCurrentOpen] = useState(null);

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
              currentOpen === proj.id
                ? setCurrentOpen(null)
                : setCurrentOpen(proj.id)
            }
          >
            <h3>{proj.name}</h3>

            <TechList techStack={proj.techStack} />

            <div className={styles.imageContainer}>
              <img src={proj.imgSrc} alt={proj.name} />
            </div>

            {currentOpen === proj.id && (
              <>
                <p>{proj.description}</p>
                <ProjectController
                  link={proj.link}
                  videoDemo={proj.videoDemo}
                  sourceCode={proj.sourceCode}
                />
              </>
            )}

            <div className={styles.showDetailsController}>
              {currentOpen !== proj.id ? (
                <p>
                  more... <ArrowDown />
                </p>
              ) : (
                <p>
                  less...
                  <ArrowUp />
                </p>
              )}
            </div>
          </li>
        ))}
      </div>
    </section>
  );
}

export default Project;
