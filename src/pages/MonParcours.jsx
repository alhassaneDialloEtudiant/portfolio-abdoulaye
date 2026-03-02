import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MonParcours.css';

function MonParcours() {
  const elements = [
    
    {
      annee: '2025 – 2026',
      titre: 'Licence 3 Information - Communication',
      ecole: 'Université Paris 8, France',
      statut: 'en cours'
    },
    {
      annee: '2024 – 2025',
      titre: 'Licence 4 Communication',
      ecole: 'Institut Supérieur de l’Information et de la Communication de Kountia, Guinée',
      statut: 'terminé(memoire de fin d’études soutenu en mars 2026)'
    },
    {
      annee: '2023 – 2024',
      titre: 'Licence 3 Communication',
      ecole: 'Institut Supérieur de l’Information et de la Communication de Kountia, Guinée',
      statut: 'terminé'
    },
    {
      annee: '2022 – 2023',
      titre: 'Licence 2 Communication',
      ecole: 'Institut Supérieur de l’Information et de la Communication de Kountia, Guinée',
      statut: 'terminé'
    },
    {
      annee: '2022 – 2022',
      titre: 'Licence 1 Communication',
      ecole: 'Institut Supérieur de l’Information et de la Communication de Kountia, Guinée',
      statut: 'terminé'
    },
    {
      annee: '2020 – 2021',
      titre: 'Baccalauréat Sciences sociales',
      ecole: 'Lycée Amilcar Cabral, Guinée',
      statut: 'terminé'
    }
  ];

  return (
    <div className="contenu-onglet">
      <motion.h3 
        className="titre-onglet"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Mon parcours
      </motion.h3>

      <motion.ul 
        className="liste-parcours"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {elements.map((item, index) => (
          <motion.li
            key={index}
            className="item-parcours"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <strong>{item.annee} :</strong> {item.titre}
            <br />
            <span className="details">({item.ecole}) {item.statut && `– ${item.statut}`}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default MonParcours;
