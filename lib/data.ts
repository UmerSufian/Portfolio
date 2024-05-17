
import expenseTracker from "@/public/expenseTracker.png";
import blogWebsite from "@/public/blogWebsite.png";
import amazonClone from "@/public/amazonClone.png";
import newsPulse from "@/public/newsPulse.png";
import mediMeet from "@/public/mediMeet.png";
import covidScreener from "@/public/covidScreener.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Full-Stack Developer",
    location: "Faisalabad, Pakistan",
    description:
      "I am actively gaining hands-on experience in web development by working on real projects. This practical approach allows me to apply my skills and build a solid understanding of creating websites and applications.",
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Expense Tracker",
    description:
      "An expense tracker designed for hands-on experience and logic-building, fostering practical skills in financial management.",
    tags: ["Next.Js", "Typescript", "Tailwind CSS" , "React Graphs"],
    imageUrl: expenseTracker,
  },
  {
    title: "Blog Website",
    description:
      "A blog website crafted for hands-on experience, featuring seamless integration with the Contentful API for dynamic and efficient content management.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Contentful Api"],
    imageUrl: blogWebsite
  },
  {
    title: "Amazon Clone",
    description:
      "An Amazon clone project, meticulously crafted with HTML, CSS, and JavaScript, providing a hands-on experience in web development and dynamic functionality.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: amazonClone ,
  },
  {
    title: "News Pulse",
    description:
      "NewsPulse brings you fresh news using the News API, making sure you stay updated. Easily share stories using the Web Share API feature. Enjoy a clean look and feel thanks to Tailwind CSS styling.",
    tags: ["Next.Js", "TypeScript", "Tailwind CSS"],
    imageUrl: newsPulse,
  },
  {
    title: "MediMeet",
    description:
      "MediMeet: Book doctor appointments easily with Next.js/React.js. Secure logins, fast updates, and sleek design with Strapi, React Email, and Tailwind CSS.",
    tags: ["Next.JS", "Strapi", "Kinde","React Email","TypeScript"],
    imageUrl: mediMeet,
  },
  {
    title: "Covid Screener",
    description:
      "A beginner-friendly  project crafted with HTML, CSS, and JavaScript for hands-on learning and practical coding experience.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: covidScreener,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "C++",
  "MySql",
  "Firebase",
  "Framer Motion",
] as const;
