import type { Project } from "../../../data/projects";
import './ProjectCard.css'

interface ProjectCardProps extends Project {
  fullWidth?: boolean;
}

export default function ProjectCard({
  title,
  description,
  img,
  techs,
  libraries,
  github,
  link,
  fullWidth = false,
}: ProjectCardProps) {
  return (
    <article className={`project-wireframe-card c1-style ${fullWidth ? "project-full" : ""}`}>
      <div className="wf-text-group">

        {/*//* Imgagen */}
        <div className="wf-image-box">
          {img != "" ? (
            <img src={`${img}`} className="img-proyecto" />
          ) :
            title.slice(0, 2).toUpperCase()
          }
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="wf-tech">
          {/*//* Tecnologías */}
          {techs.map((tech) => (
            <span key={tech} className="tech-pill-CARD">
              {tech}
            </span>
          ))}

          {/*//* Librerias */}
          {libraries && libraries.length > 0 && (
            libraries.map((lib) => (
              <span key={lib} className="tech-pill-CARD">
                {lib}
              </span>
            ))
          )}
        </div>

        {/*//* Botones */}
        <div className="wf-buttons">
          {github && (
            <a href={github} className="wf-btn-circle">
              <i className="fab fa-github"></i>
            </a>
          )}

          {link && (
            <a href={link} className="wf-btn-pill">
              <i className="fa-solid fa-link"></i> Ver proyecto
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
