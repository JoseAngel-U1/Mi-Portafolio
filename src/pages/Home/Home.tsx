import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Technologies from '../../components/Technologies/Technologies';
import Experience from '../../components/ExperienceYFormation/Experience';
import ViewProjects from '../../components/ViewProjects/ViewProjects';
import Formation from '../../components/ExperienceYFormation/Formation';
import Certifications from '../../components/ExperienceYFormation/Certifications';
import ViewExtraSection from '../../components/ViewExtraSection/ViewExtraSection';
import Footer from '../../components/Footer/Footer';

import './Home.css'

const Home: React.FC = () => {
    return (
        
        <div className='Page-Home'>
            <div className="main-layout">
                {/*//TODO: Columna izquierda (Sidebar) */}
                <Sidebar />

                {/*//TODO: Columna derecha (Contenido) */}
                <main className="content-area">
                    {/*//TODO: Barra flotante */}
                    <Navbar />
                    <Technologies />
                    <Experience />
                    <ViewProjects />
                    <Formation />
                    <Certifications />
                    <ViewExtraSection />

                    {/*//TODO: Pie de página */}
                    <Footer />
                </main>
            </div>

        </div>
    );
};

export default Home;
