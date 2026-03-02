import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MesCompetences.css'; // Assurez-vous d'importer le fichier CSS pour le style  de la page

function MesCompetences() {
  const categories = [
    {
      titre: "Savoir-faire technique",
      competences: [
        { nom: "HTML5", icone: "🟠", description: "Initiation" },
        { nom: "CSS3", icone: "🔵", description: "Initiation" },
        { nom: "Conception web Low code", icone: "☕", description: "Avancé" },
        { nom: "WordPress", icone: "🌐", description: "Création de sites web simple" },
        
        { nom: "Web Disign Figma", icone: "🟡", description: "Intermédiaire" },
        { nom: "Graphique disign", icone: "🌐", description: "Avancé" },
        { nom: "Gestion de projets", icone: "🟥", description: "Avancé"},
      
      ]
    },
    

    {
      titre: "Outils de création et de gestion de projets",
      competences: [
        { nom: "Adobe Photoshop", icone: "🔧", description: "Avancé" },
        { nom: "Adobe Illustrator", icone: "🎨", description: "Avancé" },
        { nom: "Adobe InDesign", icone: "📬", description: "Avancé" },
        { nom: "Adobe Premiere Pro", icone: "🤖", description: "Intermédiaire" },
        { nom: "Trelo", icone: "🖥️", description: "Avancé" },
        { nom: "Asana", icone: "🐙", description: "Avancé" },
        { nom: "Google Workspace", icone: "🌐", description: "Avancé" },
      ]
    },
  ];

  return (
    <div className="competences-container">
      <motion.h3
        className="competences-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Compétences techniques
      </motion.h3>

      <motion.p
        className="competences-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Voici les technologies et outils que je maîtrise actuellement et que j'utilise dans mes projets personnels et académiques :
      </motion.p>

      <div className="competences-categories">
        {categories.map((categorie, idx) => (
          <motion.div
            key={idx}
            className="competence-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            <h4>{categorie.titre}</h4>
            <div className="competences-grid">
              {categorie.competences.map((comp, index) => (
                <motion.div
                  key={index}
                  className="competence-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="competence-icone">{comp.icone}</div>
                  <div className="competence-nom">{comp.nom}</div>
                  <div className="competence-description">{comp.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MesCompetences;
