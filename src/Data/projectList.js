const projectList = [
  {
    id: "p-01",
    name: "Preparation App",
    shortDesc:
      "This is a full-stack SSR webapp using Node.js, Express, MongoDB, EJS, CSS etc. With features user signup/login and more.",
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
    // videoDemo:
    //   "https://www.loom.com/share/24b8f9eb7d6f4a0f893e6293056aad2b?sid=3cb414ce-367d-4c39-9e6c-d02360e9ecb1",
  },
  {
    id: "w1",
    name: "Wedding Website",
    imgSrc: "/wedding.JPG",
    shortDesc:
      "I developed this unique wedding website for my churchmates to help them organize and digitalize their wedding invitations.",
    link: "https://jayandmikka-wedding.netlify.app/",
    description: `Welcome to the Wedding of the Year website, crafted with the Astro SSG framework. Every design element and layout you see here is born from my vision and creativity including the logo. I've used Astro island architecture with React js component for interactive components. It has an RSVP form that sends message directly to their account, responsive image gallery, accordion for FAQ page, carousel in our story page and more. Explore and enjoy the celebration of this special occasion.`,
    sourceCode: "https://github.com/mdejesus23/jay-mikka-wedding",
    techStack: [
      { id: "a1", tech: "Astro", techImg: "/icons8-astro-js.svg" },
      { id: "js101", tech: "Javascript", techImg: "/js.svg" },
      { id: "css101", tech: "CSS", techImg: "/css.svg" },
      { id: "h1", tech: "HTML", techImg: "/html.svg" },
    ],
    videoDemo: "",
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
      "Food Ordering App using React.js with useState, useReducer, and other hooks. This is just a practice project with React js.",
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
];

export default projectList;
