import React from "react";
import { formacion } from '../../data/formation';
import './ExperienceYFormation.css'

const Formation: React.FC = () => {
  return (
    <section id="formacion">
      <h2 className="section-title">Formación</h2>

      <div className="timeline">
        {formacion.map((item, index) => (
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
