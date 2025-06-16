import React from 'react';
import './Dashboard.css';
import { FaUserInjured, FaUserMd, FaCalendarCheck, FaChartBar } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Tableau de bord</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card blue">
          <FaUserInjured className="icon" />
          <div>
            <h3>Patients</h3>
            <p>120</p>
          </div>
        </div>
        <div className="dashboard-card green">
          <FaUserMd className="icon" />
          <div>
            <h3>Utilisateurs</h3>
            <p>15</p>
          </div>
        </div>
        <div className="dashboard-card orange">
          <FaCalendarCheck className="icon" />
          <div>
            <h3>Rendez-vous</h3>
            <p>34</p>
          </div>
        </div>
        <div className="dashboard-card purple">
          <FaChartBar className="icon" />
          <div>
            <h3>Statistiques</h3>
            <p>+25%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
