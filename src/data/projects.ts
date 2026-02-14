//! INFORMACION DE PROYECTOS:
export interface Project {
  title: string;
  description: string;
  img: string;
  techs: string[];
  libraries: string[];
  github?: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "TDA-Explorer",
    description:
      `Herramienta de aprendizaje visual e interactiva para
      entender cómo funcionan los Tipos de Datos Abstractos (TDA) y sus operaciones. 
      Explora las estructuras con modelos 3D, AR y animaciones.`,
    img: "/Imgs/TDA_Explorer.png",
    techs: ["HTML", "CSS", "JavaScript", "Node.js"],
    libraries: ["Three.js", "A-Frame", "GSAP", "Awesome", "SweetAlert2"],
    github: "https://github.com/JoseAngel-U1/TDA-Explorer",
    link: "https://joseangel-u1.github.io/TDA-Explorer/",
    featured: true,
  },
  {
    title: "JAME-CUBE-Rubik-s-Cube-Simulator",
    description: `Simulador lógico de un cubo Rubik 3x3 basado en la convención Singmaster. 
      Implementa una representación matricial de las seis caras y un si stema de transformaciones que actualiza tanto la rotación de la cara como las tiras adyacentes. 
      Incluye parser de notación WCA estándar y renderizado dinámico del estado del cubo en el navegador.`,
    img: "/Imgs/Simulador3x3_2D.png",
    techs: ["HTML", "CSS", "JavaScript"],
    libraries: [],
    github: "https://github.com/JoseAngel-U1/JAME-CUBE-Rubik-s-Cube-Simulator",
    link: "https://joseangel-u1.github.io/JAME-CUBE-Rubik-s-Cube-Simulator/",
    featured: true,
  },
  {
    title: "Podcast Tramix: UI y UX en Aplicaciones de Trámites",
    description: `Proyecto académico enfocado en el análisis de la importancia, uso y diferencias entre UI y UX aplicado a “Tramix”, una plataforma diseñada para informar a los usuarios sobre requisitos, procesos y ubicaciones antes de realizar trámites presenciales. 
    El podcast explicó cómo una interfaz clara y una experiencia bien estructurada pueden reducir fricción, mejorar la comprensión del proceso y optimizar la toma de decisiones del usuario.`,
    img: "/Imgs/Pod_Tramix.png",
    techs: ["HTML", "CSS", "Canva"],
    libraries: [],
    github: "https://github.com/JoseAngel-U1/Podcast",
    link: "https://joseangel-u1.github.io/Podcast/",
    featured: true,
  },
  {
    title: "PokeAPI",
    description:
      `Aplicación web Pokédex que consume la PokéAPI, implementando cache en memoria y precarga inteligente para optimizar rendimiento y experiencia de usuario.`,
    img: "/Imgs/PokeDex.png",
    techs: ["HTML", "CSS", "JavaScript", "PokéAPI"],
    libraries: [],
    github: "https://github.com/JoseAngel-U1/PokeDex/",
    link: "https://joseangel-u1.github.io/PokeDex/",
    featured: true,
  },
  {
    title: "API-JSONPlaceholder",
    description:
      `Aplicación web desarrollada con JavaScript vanilla que consume la API pública JSONPlaceholder mediante Fetch API. Permite la navegación secuencial de publicaciones individuales y la visualización completa de todos los posts en una sola interfaz dinámica, con manejo de errores y renderizado animado del DOM.`,
    img: "/Imgs/API_Posts.png",
    techs: ["HTML", "CSS", "JavaScript", "JSONPlaceholder"],
    libraries: [],
    github: "https://github.com/JoseAngel-U1/api-posts-dashboard",
    link: "https://joseangel-u1.github.io/api-posts-dashboard/",
    featured: true,
  },
];
