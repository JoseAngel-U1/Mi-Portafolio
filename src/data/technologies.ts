//! INFORMACION DE LAS Tecnologias que uso:
export interface Technology {
  name: string;
  color: "blue" | "green" | "purple" | "dark";
}

export const technologies: Technology[] = [
  { name: "React", color: "blue" },
  { name: "Node.js", color: "green" },
  { name: "Python", color: "purple" },
  { name: "JavaScript", color: "blue" },
  { name: "MongoDB", color: "purple" },
  { name: "Express", color: "green" },
  { name: "TypeScript", color: "blue" },
  { name: "C#", color: "green" },
  { name: "SQL Server", color: "purple" },
  { name: "...", color: "dark" },
];
