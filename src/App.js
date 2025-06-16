import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './page/Dashboard/Dashboard';
import About from './page/About/About';
import RendezVous from './page/RendezVous';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-layout">
          <Header />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/rendez-vous" element={<RendezVous />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
