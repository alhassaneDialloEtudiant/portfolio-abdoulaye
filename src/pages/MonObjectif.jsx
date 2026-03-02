import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MonObjectif.css';

function MonObjectif() {
  return (
    <div className="objectif-container">
      <motion.h3
        className="objectif-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mon Objectif
      </motion.h3>

      <motion.p
        className="objectif-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Déterminé, ambitieux et passionné par le monde du numérique, je poursuis mes objectifs professionnels et personnels avec l'envie de contribuer positivement à mon entourage, à mon pays et au monde.
      </motion.p>

      <motion.div
        className="objectif-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4>🎯 Objectif à court terme</h4>
        <p>
          Actuellement étudiant en Licence 3 et Esperant être admis en Master pour l'année Universitaire 2026-2027,
          je suis à la recherche :
          <br />
          • D'un <strong>stage</strong> dès maintenant pour consolider mes compétences pratiques dans le domaine de la comminucation et du numérique.
          <br />
          • D'une <strong>entreprise partenaire</strong> pour mon <strong>contrat d'alternance</strong> 2026-2027 afin de poursuivre ma formation en milieu professionnel.
        </p>

        <h4>🚀 Objectif à moyen terme</h4>
        <p>
          Travailler dans une entreprise ou d'une institution pour mettre en pratique  mes expériences.
          développer une culture d'entreprise.
        </p>

        <h4>🌍 Objectif à long terme</h4>
        <p>
          Mon ambition est double :
          <br /><br />
          • Devenir <strong>entrepreneur</strong> en créant une agence de conseils en communication,marketing digital et branding. 
          <br /><br />
        </p>
      </motion.div>
    </div>
  );
}

export default MonObjectif;
