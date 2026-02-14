//! INFORMACION DE MI FORMACION:
export interface Formacion {
  institution: string;
  degree: string;
  color: "blue" | "purple";
}

export const formacion: Formacion[] = [
  {
    institution: "Universidad Tecnológica de Nayarit - 2024 - Actualidad",
    degree: "Técnico superior universitario en Desarrollo de Software Multiplataforma",
    "color": "blue"
  },
  {
    institution: "Bachillerato CECyTEN Plantel Tepic - 2021- 2024",
    degree: "Técnico Profecional en Programación",
    "color": "purple"
  }
];
