import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MesExperiences.css';

function MesExperiences() {
  const experiences = [
    {
      annee: "Octobre - Avril 2025 ",
      titre: " Assistant communication, Palabres consulting ",
      lieu: "Guinée",
      description: [
          "Appui à la coordination de l’Assemblée annuelle des ports autonomes de l’Afrique del’Ouest et du centre.",
          "Appui à l’Organisation de la 10 eme Anniversaire de IBS Group",
          "Veille informationnelle pour la société Rio Tinto, le projet Simandou et le secteur minieren Guinée.",
          "Conception des supports de communication numérique."
      ],
      competences:  ["Google alerte", "Canva","adobe premier pro","meta business suite", "linkedin analytic"]
    },
    
    {
      annee: "Février 2025 – Janvier 2026",
      titre: "Social Media Manager – Top construction metaliqu Guinée",
      lieu: "Guinée",
         description: [
          "Elaboration et mise en œuvre de la stratégie digitale  de l’Entreprise",
          "Conception et pilotage des évenements institutionnels",
          "Veille concurentielle et gestion d’image"
      ],
      competences: ["Google alerte", "Canva","adobe premier pro","meta business suite", "linkedin analytic"]
    },
    {
      annee: "Juillet – Août 2025",
      titre: "Superviseur du 4 eme recensement général de la population et de l’habitat (RGPH) en Guinée.",
      lieu: "Guinée,Conakry",
      description: [
        "Sensibilisation et mobilisation des populations",
        "Supervision et encadrement des agents recenseurs",
        "Rapportage et remontée d’informations",
      ],
      competences: ["Rigueur", "Service client", "Travail en équipe"]
    },
    {
      annee: "Juillet – Août 2024",
      titre: " CDD - Enquêteur géomarketing.",
      lieu: "La GFO(Guinnéenne de fibre optique), Guinée",
       description: [
        " Identifier les opportunités d’implantation et d’expansion.",
        "Identifier et recenser les points de vente, entreprises ou infrastructures ciblées:",
        "• Contribuer à l’élaboration de cartes thématiques (zones de chalandise, densité commerciale, concurrence.",
      ],
      competences: ["Trello", "KoboToolbox"]
    },
  ];

  return (
    <div className="experiences-container">
      <motion.h3
        className="experiences-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes expériences
      </motion.h3>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <span className="timeline-date">{exp.annee}</span>
              <h4>{exp.titre}</h4>
              <span className="timeline-lieu">{exp.lieu}</span>
              <ul>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <div className="competences-tags">
                {exp.competences.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MesExperiences;
