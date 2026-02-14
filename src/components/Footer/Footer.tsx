import React from 'react';
import { miInfo } from '../../data/extra';
import './Footer.css';

const Footer: React.FC = () => {
    return (

        <footer id="contacto" className="main-footer">
            <h3>{miInfo.name}</h3>
            <div className='footer-info'>
                <div className="footer-info-a">
                    <a href={`mailto:${miInfo.email}`} className="footer-icon">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <p>{miInfo.email}</p>

                    <a href={`tel:+52${miInfo.phoneNumber}`} className="footer-icon">
                        <i className="fas fa-phone"></i>
                    </a>
                    <p>{miInfo.phoneNumber}</p>
                </div>

            </div>

            <div className="footer-icons">
                <a className="footer-icon"> <i className="far fa-heart"></i> </a>
                {/*//? <a className="footer-icon"> <i className="fab fa-facebook-f"></i> </a> */}
                {/*//? <a className="footer-icon"> <i className="fab fa-twitter"></i> </a> */}
                <a href={`${miInfo.instagram}`} className="footer-icon"> <i className="fab fa-instagram"> </i></a>
                <a href={`mailto:${miInfo.email}`} className="footer-icon"> <i className="fas fa-envelope"></i> </a>
                <a href={`${miInfo.cv}`} className="footer-icon"> <i className="fas fa-arrow-down"></i> </a>
            </div>

            {/*//* Información de derechos de autor */}
            <div className="marca">© 2026 PORTAFOLIO_JAME</div>
            <div className="programador">Creada y diseñada por: {
                miInfo.name
                    .toLowerCase() //? Todo en minúscula primero
                    .split(" ") //? Separa por palabras
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //? Primera letra mayúscula y resto de la palabra en minuscula
                    .join(" ") //? volve a unir
            }</div>
        </footer>

    );
};

export default Footer;
