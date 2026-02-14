import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import './ViewProjects.css'

export default function ViewProjects() {
  const isOdd = projects.length % 2 !== 0;

  return (
    <section id="proyectos" className="view-projects">
      <h2 className="section-title">Proyectos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            fullWidth={isOdd && index === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
