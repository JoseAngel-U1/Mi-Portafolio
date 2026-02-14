//! INFORMACION DE MIS CERTIFICACIONES:
export interface Certifications {
  institution: string;
  degree: string;
  color: "blue" | "purple";
}

export const certifications: Certifications[] = [
  {
    institution: "Cisco Network Academy - 2025",
    degree: "Network Addressing and Basic Troubleshooting",
    "color": "purple"
  },
  {
    institution: "Universidad Politécnica del Estado de Nayarit - 2024",
    degree: "JavaScript Nivel Intermedio",
    "color": "blue"
  }
];
