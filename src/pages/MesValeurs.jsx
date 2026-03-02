import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MesValeurs.css';

function MesValeurs() {
  const valeurs = [
    { titre: "Intégrité", description: "Être honnête et transparent dans mon travail et mes relations.", icone: "🛡️" },
    { titre: "Persévérance", description: "Aller au bout de mes projets même face aux défis.", icone: "💪" },
    { titre: "Curiosité", description: "Toujours apprendre, explorer et évoluer.", icone: "🔍" },
    { titre: "Respect", description: "Valoriser la diversité, écouter, et travailler en équipe.", icone: "🤝" },
    { titre: "Engagement", description: "M'investir pleinement dans chaque mission.", icone: "🔥" },
    { titre: "Esprit d'équipe", description: "Construire des succès collectifs plutôt qu'individuels.", icone: "🤝" }
  ];

  return (
    <div className="valeurs-container">
      <motion.h3
        className="valeurs-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes valeurs
      </motion.h3>

      <motion.p
        className="valeurs-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Je crois que la réussite passe par des valeurs fortes. Voici celles qui me guident au quotidien :
      </motion.p>

      <div className="valeurs-grid">
        {valeurs.map((valeur, index) => (
          <motion.div
            key={index}
            className="valeur-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="valeur-icone">{valeur.icone}</div>
            <h4>{valeur.titre}</h4>
            <p>{valeur.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MesValeurs;
