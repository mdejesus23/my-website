import styles from "./Project.module.css";

const projectList = [
  {
    id: "p-01",
    name: "Preparation App",
    imgSrc: "",
    link: "https://preparation-app.onrender.com/",
    description: `
      I have developed a comprehensive preparation app for our church organization. This full-stack web application is built using Node.js, with Express serving as the backend framework, MongoDB for data storage, EJS templates for rendering HTML documents in response to client requests, and CSS for styling. Key functionalities include user signup and login features, where I've incorporated Express-session to store session data in the database and utilize sessionId in the browser's cookie. Additionally, I've implemented Content Security Policy (CSP) using the Node Helmet package and included CSRF protection to enhance the overall security of the website, and many more.. You can watch the video for demo or login using this account.. test123@gmail.com | pass: Test123 | theme passcode: asdf`,
    sourceCode: "https://github.com/mdejesus23/preparation-app",
    techStack: [
      "html",
      "css",
      "javascript",
      "nodejs",
      "mongodb",
      "ejs template engine",
    ],
    videoDemo:
      "https://www.loom.com/share/24b8f9eb7d6f4a0f893e6293056aad2b?sid=3cb414ce-367d-4c39-9e6c-d02360e9ecb1",
  },
  {
    id: "p1",
    name: "Food Ordering App",
    imgSrc: "",
    link: "https://food-app.melnerdz.com",
    description: `I have developed a Food Ordering App using React.js, incorporating essential concepts such as useState for state management, useReducer, useCallback, and other key React hooks. Additionally, I utilized the Fetch API to send GET requests to a Firebase server and interact with a real-time database. The app is styled using Sass, providing a visually appealing interface. Users can add items to their cart and place orders, triggering a POST request to Firebase for seamless order processing.`,
    sourceCode: "https://github.com/mdejesus23/food-app",
    techStack: ["sass", "react", "firebase"],
    videoDemo: "",
  },
  {
    id: "p2",
    name: "Ecommerce",
    imgSrc: "",
    link: "https://shop.melnerdz.com",
    description: `I have developed an E-commerce website using technologies such as HTML, Sass, and JavaScript. To retrieve product data dynamically, I utilize the Fetch API to send a GET request to Firebase and seamlessly render the information on the client side. Additionally, I have implemented local storage to effectively store and manage cart data. While the application doesn't support POST requests, it serves as a comprehensive showcase of my proficiency in user interface design and responsive web development.`,
    sourceCode: "https://github.com/mdejesus23/ecommerce-sample",
    techStack: ["html", "css", "javascript", "firebase"],
    videoDemo: "",
  },
  {
    id: "p4",
    name: "Tech Documentation",
    imgSrc: "",
    link: "https://documentation.melnerdz.com",
    description: `This is an HTML and CSS technical documentation, a comprehensive resource converted from our handy cheat sheet PDF into a user-friendly website. Accessible on any device, it provides quick references for tags, elements, selectors, and styling techniques. Elevate your coding productivity and effortlessly create stunning web pages. I have utilized grid and flexbox to showcase my capabilities in building web pages and UI from scratch.`,
    sourceCode: "https://github.com/mdejesus23/technical-doc",
    techStack: ["html", "css", "javascript"],
    videoDemo: "",
  },
];

function Project() {
  return (
    <section id="project" className={styles.projectSection}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projectList.map((proj) => (
          <li>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a className="" href={proj.sourceCode}>
              Code
            </a>
            <a className="" href={proj.link}>
              Live
            </a>
            {proj.videoDemo && (
              <a className="" href={proj.videoDemo}>
                Demo
              </a>
            )}
          </li>
        ))}
      </div>
    </section>
  );
}

export default Project;
