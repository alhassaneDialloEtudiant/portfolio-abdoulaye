import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MesServices.css';

function MesServices() {
  const services = [
    {
      icon: "📋",
      titre: "Conseil personnalisé",
      description: "Orientation vers les meilleures formations et universités adaptées à votre projet."
    },
    {
      icon: "🏫",
      titre: "Démarches d'inscription",
      description: "Accompagnement pour les inscriptions dans les universités et écoles en France et au Canada."
    },
    {
      icon: "🛂",
      titre: "Assistance Visa étudiant",
      description: "Aide pour préparer et optimiser votre dossier de demande de visa étudiant."
    },
    {
      icon: "🏡",
      titre: "Aide à l’hébergement",
      description: "Support pour trouver un logement adapté à votre budget et vos besoins."
    },
    {
      icon: "🎯",
      titre: "Préparation aux entretiens",
      description: "Coaching pour réussir vos entretiens de visa ou d'admission."
    },
    {
      icon: "🌎",
      titre: "Accompagnement global",
      description: "Suivi complet jusqu’à votre installation dans le pays de destination."
    }
  ];

  return (
    <div className="services-container">
      <motion.h3 
        className="services-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes Services
      </motion.h3>

      <motion.p 
        className="services-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        À travers mon agence <strong>Alhassane Global EduConnect</strong>, j’accompagne les étudiants guinéens et du monde entier dans leur projet d’études en France, au Canada et ailleurs.
      </motion.p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h4>{service.titre}</h4>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MesServices;
