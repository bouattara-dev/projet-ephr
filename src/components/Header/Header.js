import React from 'react';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Acueil</h1>
      <div className="header-user">
        <FaUserCircle className="user-icon" />
        <span className="username">Admin</span>
      </div>
    </header>
  );
}

export default Header;
