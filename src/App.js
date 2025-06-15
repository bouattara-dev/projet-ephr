import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-content">
        {/* On ajoutera le reste ici plus tard */}
        <h1>Bienvenue sur le tableau de bord EPHR</h1>
         </div>
      </div>
    </div>
  );
}

export default App;
