import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
export const SkillsImages = [
  { src: "/next1.svg", alt: "Next.js", className:"" },
  { src: "/re.svg", alt: "React", className:"" },
  { src: "/tail.svg", alt: "Tailwind CSS", className:"" },
  { src: "/three.svg", alt: "Three.js", className:"" },
  { src: FaNodeJs, alt: "Node.js", className:"text-green-500 text-3xl" },
  { src: SiExpress, alt: "Express.js", className:"text-white text-3xl" },
  { src: "/ts.svg", alt: "TypeScript", className:"" },
  { src: "/javascript.svg", alt: "JavaScript", className:"" },
  { src: "/git.svg", alt: "Git", className:"" },
  { src: "/dock.svg", alt: "docker-icon", className:"" },
  { src: "/python.svg", alt: "Python", className:"" },
  { src: "/html.svg", alt: "HTML", className:"" },
  { src: "/css.svg", alt: "CSS", className:"" },
  { src: BiLogoPostgresql, alt: "PostgreSQL", className:"text-4xl text-sky-500" },
];

export const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];


export interface Project {
  id:string
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: {
      id: number;
      name: string;
      designation: string;
      image: string;
  }[];
  category: string;
  status: "Ready" | "Archived" | "Working"; // Ensure this matches the allowed types
  gitHub:string;
  liveLink:string
}
export const projects:Project[] = [
  {
    id:"1",
    title: "Automated CICD Pipeline",
    description:
      "Automated CI/CD Pipeline for Node.js Application with Github Actions",
    image: "/computer.jpg",
    link: "#",
    technologies: [
      {
        id: 1,
        name: "Javascript",
        designation: "",
        image: "/javascript.svg",
      },
      { id: 2, name: "Nextjs", designation: "", image: "/next1.svg" },
      {
        id: 3,
        name: "Javascript",
        designation: "",
        image: "/javascript.svg",
      },
      { id: 4, name: "Nextjs", designation: "", image: "/next1.svg" },
    ],
    category: "DevOps",
    status: "Ready", // Ensure this is either "live", "archived", or undefined
    gitHub:"",
    liveLink:""
  },
  {
    id:"2",
    title: "User Dashboard",
    description:
      "Full stack Authentication Dashboard built with express and NEXT.JS",
    image: "/computer.jpg",
    link: "#",
    technologies: [
      {
        id: 1,
        name: "Javascript",
        designation: "",
        image: "/javascript.svg",
      },
      { id: 2, name: "Nextjs", designation: "", image: "/next1.svg" },
      {
        id: 3,
        name: "Javascript",
        designation: "",
        image: "/javascript.svg",
      },
      { id: 4, name: "Nextjs", designation: "", image: "/next1.svg" },
    ],
    category: "Full Stack",
    status: "Working", // Ensure this is either "live", "archived", or undefined
    gitHub: "",
    liveLink:""
  },
  {
    id:"3",
    title: "Codeclimb Api",
    description:
      "Restful api for E-learning Platform made using express.js and Mongodb",
    image: "/computer.jpg",
    link: "#",
    technologies: [
      {
        id: 1,
        name: "Javascript",
        designation: "",
        image: "/javascript.svg",
      },
      { id: 2, name: "Nextjs", designation: "", image: "/next1.svg" },
      {
        id: 3,
        name: "Javascript",
        designation: "",
        image: "/javascript.svg",
      },
      { id: 4, name: "Nextjs", designation: "", image: "/next1.svg" },
    ],
    category: "Backend",
    status: "Archived", // Ensure this is either "live", "archived", or undefined
    gitHub: "",
    liveLink:""
  },
  {
    id:"4",
    title: "Film Flicker",
    description: "Movie and Anime Discovery Webapp built using Next App Router",
    image: "/computer.jpg",
    link: "#",
    technologies: [
      {
        id: 1,
        name: "Javascript",
        designation: "",
        image: "/javascript.svg",
      },
      { id: 2, name: "Nextjs", designation: "", image: "/next1.svg" },
      {
        id: 3,
        name: "Javascript",
        designation: "",
        image: "/javascript.svg",
      },
      { id:4, name: "Nextjs", designation: "", image: "/next1.svg" },
      {
        id:1,
        name: "Javascript",
        designation: "",
        image: "/javascript.svg",
      },
      { id: 2, name: "Nextjs", designation: "", image: "/next1.svg" },
    ],
    category: "Frontend",
    status: "Ready", // This is correct as it matches the allowed type
    gitHub: "",
    liveLink:""
  },
];
