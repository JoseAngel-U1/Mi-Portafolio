import React from "react";
import "./Technologies.css";
import { technologies } from "../../data/technologies";

const Technologies: React.FC = () => {
  return (
    <section id="tecnologias">
      <h2 className="section-title">Tecnologías</h2>

      <div className="tech-pills-container">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`tech-pill ${tech.color}`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
