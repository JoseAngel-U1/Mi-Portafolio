import React from "react";
import { experiencia } from '../../data/experencia'
import './ExperienceYFormation.css'

const Experience: React.FC = () => {
  return (
    <section id="experiencia">
      <h2 className="section-title">Experiencia / Proyectos Destacados</h2>

      <div className="timeline">
        {experiencia.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div
              className={`timeline-dot ${item.color}`}
            ></div>

            <div className="timeline-content">
              {/*//* TITULO Y FECHA */}
              <h4>{item.title}</h4>
              {item.subtitle && <i className="subtitulo_exp">{item.subtitle}</i>}

              {/*//* DESCRIPCION */}
              {item.description.length > 0 ? (
                item.description.map((text, i) => (
                  <p key={i} className="timeline-content-descripcion">
                    {text}
                  </p>
                ))
              ) : (
                <ul className="list-disc pl-5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
