import React from "react";
import { miInfo } from "../../data/extra"
import './Sidebar.css'

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar glass-panel">
            <div className="profile-header">
                <div className="profile-img">
                    {miInfo.img && <img src={miInfo.img}></img>}
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                </div>

                <h1>{miInfo.name}</h1>
                <h2> Desarrollador Full Stack <span className="highlight">especializado en Backend</span></h2>

                <div className="info-item">
                    <span className="material-symbols-outlined icon">location_on</span>
                    {miInfo.location_on}
                </div>

                <div className="info-item">
                    <span className="material-symbols-outlined icon">mail</span>
                    {miInfo.email}
                </div>

                <div className="social-icons">
                    <a href={`${miInfo.cv}`} className="social-icon" aria-label="CV"> <i className="fa-solid fa-file"></i> </a>
                    {/*//? <a href={`${miInfo.instagram}`} className="social-icon" aria-label="Instagram"> <i className="fab fa-instagram"></i> </a> */}
                    {/*//? <a href={`${miInfo.LinkedIn}`} className="social-icon" aria-label="LinkedIn"> <i className="fab fa-linkedin-in"></i> </a> */}
                    <a href={`${miInfo.GitHub}`} className="social-icon" aria-label="GitHub"> <i className="fab fa-github"></i> </a>
                </div>

                <div className="about-section">
                    <h3>Sobre mí</h3>
                    <div className="quote-box">
                        <span className="quote-mark">"</span>
                        <p>Soy desarrollador autodidacta especializado en Backend, apasionado por entender cómo funcionan los sistemas 
                            desde adentro. He trabajado con JavaScript, TypeScript (React), Node.js, Python, bases de datos SQL y MongoDB , construyendo proyectos
                            completos y bien estructurados. Disfruto creando interfaces funcionales y lógica sólida, resolviendo problemas 
                            reales y optimizando flujos de datos. Mi objetivo es seguir creciendo como desarrollador y entregar herramientas 
                            útiles y bien hechas.
                        </p>
                        <span className="quote-mark right">"</span>
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
