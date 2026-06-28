import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";


export const skills = [

  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
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
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
    ],
  },

];