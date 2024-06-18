import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am Harshit Kumar, welcome to my portfolio. I have a Bachelor's degree in Computer Applications (BCA) from Mandsaur University.`;

export const ABOUT_TEXT = `As a budding software developer, I am passionate about creating efficient and user-friendly web applications. My toolkit includes React, Node.js, Tailwind, MongoDB and Git. My journey started with a curiosity about how things work and has grown into a career focused on continuous learning and adapting to new challenges.I excel in collaborative environments, enjoy tackling complex problems, and am committed to delivering high-quality solutions. In my spare time, I stay active, explore new technologies, and contribute to open-source projects. I am eager to bring my fresh perspective and enthusiasm to your team. Let’s connect and build something amazing together!`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "BookShelf",
    link: project1,
    image: project1,
    description:
      "An online book reading platform where users can sign in to access and read a wide selection of books. Enjoy a seamless reading experience with personalized features and an extensive library.",
    technologies: ["HTML", "MERN", "Tailwind", "Firebase"],
  },
  {
    title: "Weather App",
    link: "https://weather-app.harshitkhatipatel.tech/",
    image: project2,
    description:
      "An application for checking weather conditions, allowing users to input a location and receive up-to-date weather information. Features include real-time updates, forecasts, and detailed weather data.",
    technologies: ["HTML", "CSS", "ReactJs", "Tailwind"],
  },
  {
    title: "E-Commerce Website",
    link: project3,
    image: project3,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // {
  //   title: "",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Mandsaur, Madhya Pradesh, India 458880",
  phoneNo: "+919405599743",
  email: "Harshitkumar1026@gmail.com",
};
