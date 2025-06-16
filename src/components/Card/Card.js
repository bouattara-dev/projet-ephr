import React from 'react';
import './Card.css';

function Card({ title, value, icon, color }) {
  return (
    <div className="card" style={{ borderLeft: `5px solid ${color}` }}>
      <div className="card-icon" style={{ color: color }}>
        {icon}
      </div>
      <div className="card-info">
        <p className="card-title">{title}</p>
        <h2 className="card-value">{value}</h2>
      </div>
    </div>
  );
}

export default Card;
