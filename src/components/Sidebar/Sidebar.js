import React from 'react';
import './Sidebar.css';
import { FaHome, FaUserMd, FaUsers, FaCogs } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>EPHR</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <FaHome className="icon" />
          <span>Tableau de bord</span>
        </li>
        <li>
          <FaUsers className="icon" />
          <span>Patients</span>
        </li>
        <li>
          <FaUserMd className="icon" />
          <span>Utilisateurs</span>
        </li>
        <li>
          <FaCogs className="icon" />
          <span>Paramètres</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
