import React, { useEffect, useState } from "react";
import "./Navbar.css";

const sections = [
    { id: "inicio", label: "Inicio" },
    { id: "tecnologias", label: "Tecnologias" },
    { id: "experiencia", label: "Experiencia" },
    { id: "proyectos", label: "Proyectos" },
    { id: "formacion", label: "Formación" },
    { id: "certificaciones", label: "Certificaciones" },
    { id: "extra", label: "Extras" },
    { id: "contacto", label: "Contacto" },
];
const OFFSET = 120; //? Altura aprox de la navbar flotante

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        const handleScroll = () => {
            let current = "inicio";

            sections.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (!section) return;

                const rect = section.getBoundingClientRect();

                if (rect.top <= OFFSET) {
                    current = id;
                }
            });

            //* Caso especial: footer / contacto
            const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

            if (bottomReached) {
                current = "contacto";
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); //? Estado correcto al cargar

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="floating-nav-container">
            <nav className="top-nav">
                {sections.map(({ id, label }) => (
                    <a
                        href={id === 'inicio' ? "/" : `#${id}`}
                        className={activeSection === id ? "active" : ""}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
