//! INFORMACION DE MI Experiencia:
export interface Experiencia {
  title: string;
  subtitle?: string;   //? opcional
  description: string[];
  bullets: string[];
  color: "blue" | "purple";
}

export const experiencia: Experiencia[] = [
  {
    "title": "Hackathon Gobierno Digital del Estado de Nayarit - 2025",
    "subtitle": "Primer lugar - Proyecto \"Futuro Consentido\"",
    "description": [],
    "bullets": [
      "Propuesta de aplicación para apoyo emocional en niños de primaria.",
      "Desarrollo conceptual y presentación de la solución ante jurado.",
      "Trabajo en equipo y resolución de problemas en tiempo limitado."
    ],
    "color": "blue"
  },
  {
    "title": "Remote System Controller (Flask + React + Mobile) - 2025 - Actualidad",
    "description": [
      "Sistema fullstack para control remoto del sistema operativo mediante API REST y emparejamiento por QR.",
      "Backend en Flask, frontend en React y aplicación móvil desarrollada con Capacitor."
    ],
    "bullets": [],
    "color": "purple"
  },
  {
    "title": "Sistema Web Interactivo de Estructuras de Datos (AR/VR/3D) - 2025",
    "description": [],
    "bullets": [
      "Implementación de pilas, colas, listas y árboles en JavaScript.",
      "Visualización interactiva y validaciones de estados de memoria."
    ],
    "color": "blue"
  },
  {
    "title": "Timer_JAME - Aplicación de escritorio para Speedcubing - 2024 - Actualidad",
    "description": [],
    "bullets": [
      "Desarrollada en Python con integración con MongoDB.",
      "Registro de tiempos, generación de mezclas y cálculo de promedios."
    ],
    "color": "purple"
  },
  {
    "title": "Tecnología Emocional para Niños de Primaria - 2025 - Actualidad",
    "description": [],
    "bullets": [
      "Investigación y desarrollo de solución educativa con modelos 3D y tecnologías VR/AR.",
      "Aplicación de entornos inmersivos para apoyo emocional en niños de primaria."
    ],
    "color": "blue"
  },
];
