//! INFORMACION SOBRE MI:
export interface MiInfo {
  name: string;
  img: string;
  email: string;
  phoneNumber: string;
  location_on: string;

  cv: string;
  instagram: string;
  LinkedIn: string;
  GitHub: string;
}

export const miInfo: MiInfo = {
  name: "JOSE ANGEL MEZA ESPARZA",
  img: import.meta.env.BASE_URL + "Imgs/YO.jpg",
  email: "joseangeldev.u1@gmail.com",
  phoneNumber: "",
  location_on: "Tepic, Nayarit",
  cv: import.meta.env.BASE_URL + "CV/CV_Jose_Meza.pdf",
  instagram: "",
  LinkedIn: "#",
  GitHub: "https://github.com/JoseAngel-U1",
};


//! INFORMACION DE COSAS EXTRA:
export interface Extra {
  title: string;
  imgSrc: string;
  description: string;
}

export const extras: Extra[] = [
  {
    title: "Mololoa Open 2025 - Competidor Oficial",
    imgSrc: import.meta.env.BASE_URL + "Imgs/Mololoa_Open2025.jpg",
    description: "Competidor en torneos de speedcubing OFICIAL, fortaleciendo habilidades de análisis rápido, optimización de movimientos y rendimiento bajo presión."
  },
  {
    imgSrc: import.meta.env.BASE_URL + "Imgs/SemanaPython.png",
    title: "Semana de Python en la Práctica - 2026",
    description: `Participación en un curso online para reforzar conocimientos autodidactas de Python.\nDurante el curso, desarrollé prácticas de automatización como generación de PDFs con imágenes de fondo y posicionamiento de texto, envío de correos automatizado mediante interacciones con páginas web, y aplicaciones de inteligencia artificial para detección de gestos de manos usando la cámara.`
  },
  {
    imgSrc: import.meta.env.BASE_URL + "Imgs/PC_OS.png",
    title: "Proyecto Destacado: Control Remoto del Sistema",
    description:
      "Sistema completo que combina React, Flask y QR para controlar funciones del PC de manera segura. Incluye frontend, backend independiente, emparejamiento por QR y demostración funcional mediante video.",
  },
  {
    imgSrc: import.meta.env.BASE_URL + "Imgs/Timer_JAME.png",
    title: "Proyecto Destacado: Speedcubing y Mentalidad Técnica",
    description: `El speedcubing representa para mí una disciplina de optimización constante.\n
      Resolver un cubo implica reconocer patrones, reducir movimientos innecesarios y tomar decisiones estratégicas bajo presión.\n
      Esta mentalidad analítica fue la base para desarrollar mi temporizador, Timer_JAME, donde apliqué lógica estructurada, control de datos y mejora continua.`,
  },
  {
    imgSrc: import.meta.env.BASE_URL + "Imgs/Timer_JAME_cardReact.png",
    title: "Timer_JAME - Visualizador de Tiempos",
    description:
      "Aplicación web desarrollada en React TS que se conecta a la base de datos de Timer_JAME (app de escritorio) para mostrar las cartas de los tiempos guardados por el usuario. Permite consultar, visualizar y analizar tus registros de speedcubing en tiempo real desde el navegador."
  }
];
