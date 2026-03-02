import React from 'react';
import { Link } from 'react-router-dom';
import MesServices from './MesServices';
import '../styles/MonAgence.css';

function MonAgence() {
  return (
    <div className="agence-container">
      <header className="agence-header">
        <div className="agence-logo">Alhassane Global EduConnect</div>
        <p className="agence-slogan">Votre passerelle vers la réussite internationale !</p>
        <div className="cta-container">
          <Link to="/contact" className="cta-button">
          <span className="cta-icon">📞</span> Me Contacter
          </Link>
        </div>

      </header>

      <section className="services-section">
        <MesServices />
      </section>

      <section className="why-choose">
        <h2>Pourquoi choisir Alhassane Global EduConnect ?</h2>
        <ul>
          <li>✨ Expertise universitaire
          </li>
          <li>🌐 Partenaire international
          </li>
          <li>🔄 Suivi personnalisé
          </li>
          <li>⚡ Rapidité et efficacité
          </li>
          <li>❤️ Engagement et écoute
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MonAgence;
