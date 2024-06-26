const projectList = [
  {
    id: "p-01",
    name: "Preparation App",
    shortDesc:
      "This is a full-stack web app using Node.js, Express, MongoDB, EJS, and CSS, featuring user signup/login.",
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
    id: "p1.5",
    name: "Lakewood Ranch",
    imgSrc: "/lakewood.jpg",
    shortDesc:
      "A custom component for a client's real estate website, enabling advanced filtering of Lakewood community listings.",
    link: "https://www.lwrhome.com/new-construction/new-construction-lakewood-ranch/",
    description: `I developed and integrated a component for a client's real estate website, enabling advanced filtering of Lakewood community listings. Both the design and layout were crafted by me to enhance user experience. If you're interested in adding similar functionality to your website, please don't hesitate to reach out.😊`,
    sourceCode: "https://github.com/mdejesus23",
    techStack: [
      { id: "js101", tech: "Javascript", techImg: "/js.svg" },
      { id: "css101", tech: "CSS", techImg: "/css.svg" },
      { id: "h1", tech: "HTML", techImg: "/html.svg" },
    ],
    videoDemo: "",
  },
  {
    id: "p1",
    name: "Food Ordering App",
    imgSrc: "/foodOrderApp.jpg",
    shortDesc:
      "Food Ordering App using React.js with useState, useReducer, and other hooks.",
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
    shortDesc:
      "HTML and CSS documentation site from a cheat sheet PDF, accessible on any device.",
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

export default projectList;
