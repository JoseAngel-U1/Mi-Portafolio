import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from "./pages/Home/Home";
import NotFound from './pages/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <Router basename="/Mi-Portafolio/">

      {/*//TODO: Contenido principal */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> {/*//? Ruta para páginas no encontradas */}
        </Routes>
      </Layout>

    </Router>
  )
}

export default App
