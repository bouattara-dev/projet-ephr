import './Sidebar.css';
import { FaHome, FaUserMd, FaUsers, FaCogs, FaCalendarCheck, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>EPHR</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <FaHome className="icon" />
          <Link to="/">Tableau de bord</Link>
        </li>
        <li>
          <FaUsers className="icon" />
          <Link to="/patients">Patients</Link>
        </li>
        <li>
          <FaUserMd className="icon" />
          <Link to="/users">Utilisateurs</Link>
        </li>
        <li>
          <FaCalendarCheck className="icon" />
          <Link to="/rendez-vous">Rendez-vous</Link>
        </li>
        <li>
          <FaCogs className="icon" />
          <Link to="/settings">Paramètres</Link>
        </li>
        <li>
          <FaInfoCircle className="icon" />
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
