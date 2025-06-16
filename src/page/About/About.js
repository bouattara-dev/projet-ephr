import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-wrapper">
      <h2 className="about-title">À propos de l’EPHR de Touba</h2>
      <p className="about-intro">
        L’Établissement Public Hospitalier Régional (EPHR) de Touba est un centre de référence pour la santé publique
        dans la région. Il s'engage à fournir des soins de qualité, à moderniser ses services et à être un acteur clé
        dans l'amélioration du système de santé.
      </p>

      <div className="event-section">
        <h3>🕰️ Événements passés</h3>
        <div className="event-card">
          <img src="/images/evenement1.jpg" alt="Campagne de dépistage" />
          <div>
            <h4>Campagne de dépistage - Mars 2023</h4>
            <p>Une campagne gratuite de dépistage du diabète, de l’hypertension et d’autres maladies chroniques.</p>
          </div>
        </div>

        <div className="event-card">
          <img src="/images/evenement2.jpg" alt="Formation du personnel" />
          <div>
            <h4>Formation du personnel - Décembre 2023</h4>
            <p>Des sessions de formation sur les nouveaux outils médicaux et la gestion des patients numériques.</p>
          </div>
        </div>
      </div>

      <div className="event-section">
        <h3>📍 Événements actuels</h3>
        <div className="event-card">
          <img src="/images/evenement3.jpg" alt="Laboratoire en rénovation" />
          <div>
            <h4>Modernisation du laboratoire</h4>
            <p>Installation de nouveaux équipements pour les analyses biologiques avancées.</p>
          </div>
        </div>
      </div>

      <div className="event-section">
        <h3>📅 Événements à venir</h3>
        <div className="event-card">
          <img src="/images/evenement4.jpg" alt="Cardiologie" />
          <div>
            <h4>Inauguration du service de cardiologie</h4>
            <p>Ouverture prévue en juillet 2025 avec une équipe spécialisée en soins cardiovasculaires.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
