import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaPhp,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiNextdotjs 
} from "react-icons/si";


export const skills = [

  {
    category: "Frontend",
    items: [
      {
        name: "Html",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3,
      },
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs ,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      
      {
        name: "Bootstrap",
        icon: FaBootstrap,
      },
    ],
  },


  {
    category: "Backend",
    items: [
      {
        name: "PHP",
        icon: FaPhp,
      },
      {
        name: "Laravel",
        icon: FaLaravel,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],
  },


  {
    category: "Tools",
    items: [
      {
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "Git",
        icon: FaGitAlt,
      },

    ],
  },

];