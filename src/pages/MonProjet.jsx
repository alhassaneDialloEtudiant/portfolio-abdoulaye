import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MonProjet.css';

/* IMPORT DES IMAGES */
import img1 from '../assets/photos/1.jpeg';
import img2 from '../assets/photos/2.jpeg';
import img3 from '../assets/photos/3.jpeg';
import img4 from '../assets/photos/4.jpeg';
import img6 from '../assets/photos/6.jpeg';
import img7 from '../assets/photos/7.jpeg';
import img8 from '../assets/photos/8.jpeg';
import img9 from '../assets/photos/9.jpeg';
import img10 from '../assets/photos/10.jpeg';
import img11 from '../assets/photos/11.jpeg';
import img12 from '../assets/photos/12.jpeg';
import img13 from '../assets/photos/13.jpeg';
import img14 from '../assets/photos/14.jpeg'; 
import img15 from '../assets/photos/15.jpeg'; 

/* IMPORT VIDEO */
import video1 from '../assets/photos/5.mp4';

function MonProjet() {
  const [filter, setFilter] = useState('all');

  const projets = [
    { titre: "Projet Vidéo", media: video1, type: "video", categorie: "web" },
    { titre: "Projet 1", media: img1, type: "image", categorie: "web" },
    { titre: "Projet 2", media: img2, type: "image", categorie: "web" },
    { titre: "Projet 3", media: img3, type: "image", categorie: "web" },
    { titre: "Projet 4", media: img4, type: "image", categorie: "web" },
    { titre: "Projet 5", media: img6, type: "image", categorie: "web" },
    { titre: "Projet 6", media: img7, type: "image", categorie: "web" },
    { titre: "Projet 7", media: img8, type: "image", categorie: "web" },
    { titre: "Projet 8", media: img9, type: "image", categorie: "web" },
    { titre: "Projet 9", media: img10, type: "image", categorie: "web" },
    { titre: "Projet 10", media: img11, type: "image", categorie: "web" },
    { titre: "Projet 11", media: img12, type: "image", categorie: "web" },
    { titre: "Projet 12", media: img13, type: "image", categorie: "web" },
    { titre: "Projet 13", media: img14, type: "image", categorie: "web" },
    { titre: "Projet 14", media: img15, type: "image", categorie: "web" },
  ];

  const filteredProjets = filter === 'all' 
    ? projets 
    : projets.filter((p) => p.categorie === filter);

  return (
    <div className="projet-container">
      <motion.h2 className="projet-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Mes Réalisations
      </motion.h2>

      <div className="projets-grid">
        <AnimatePresence>
          {filteredProjets.map((projet, index) => (
            <motion.div
              key={index}
              className="projet-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              {projet.type === "image" ? (
                <img src={projet.media} alt={projet.titre} className="projet-img" />
              ) : (
                <ClickVideo src={projet.media} />
              )}
              <div className="card-overlay">
                <h4>{projet.titre}</h4>
                <span className="category-tag">{projet.categorie}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* COMPOSANT VIDÉO PRO AVEC GESTION PAUSE/PLAY ET SON */
function ClickVideo({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-wrapper" onClick={toggleVideo}>
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        className="projet-video"
      />
      
      {/* Overlay dynamique qui change selon l'état de lecture */}
      <div className={`video-ui-overlay ${isPlaying ? 'is-playing' : 'is-paused'}`}>
        <div className="status-icon">
          {isPlaying ? (
            <div className="pause-icon">||</div> 
          ) : (
            <div className="play-icon">▶</div>
          )}
        </div>
        {!isPlaying && <p className="video-instruction">Cliquer pour le son</p>}
      </div>
    </div>
  );
}

export default MonProjet;