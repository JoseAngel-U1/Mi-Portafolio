import React from "react";
import { certifications } from '../../data/certifications';
import './ExperienceYFormation.css'

const Formation: React.FC = () => {
  return (
    <section id="certificaciones">
      <h2 className="section-title">Certificaciones / Cursos</h2>

      <div className="timeline">
        {certifications.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div
              className={`timeline-dot ${item.color}`}
            ></div>

            <div className="timeline-content">
              <h4>{item.institution}</h4>
              <p>{item.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formation;
