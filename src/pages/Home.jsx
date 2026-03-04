import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import photo from '../assets/photos/abd.jpeg';
import video1 from '../assets/photos/5.mp4'; // Importation de ta vidéo
import '../styles/Home.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', reason: '' });
  const navigate = useNavigate();

  const handleDownload = () => setIsModalOpen(true);
  const confirmDownload = () => {
    setIsModalOpen(false);
    setIsFormOpen(true);
  };
  const cancelDownload = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
  "service_kbwqunm",
  "template_aaf1u8p",
  {
    name: formData.name,
    email: formData.email,
    message: formData.message
  },
  "AmnqPHDXK4jt_6rN-"
    )
    .then(() => {
      setIsFormOpen(false);
      setFormData({ name: '', email: '', message: '' });
      setIsConfirmationModalOpen(true);
    })
    .catch(() => {
      alert("Erreur lors de l'envoi.");
    });
};



  const goToPage = (path) => navigate(path);

  return (
    <section className="home" aria-label="Accueil du portfolio">
      
      {/* HERO SECTION AVEC PHOTO EN BACKGROUND */}
      <motion.div
        className="home__hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="home__hero-bg">
          <img src={photo} alt="Photo de Diallo Alhassane" />
          <div className="home__overlay"></div>
        </div>

        <motion.div
          className="home__hero-content"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Bienvenue sur mon <span className="highlight">portfolio</span>
          </h1>

          <p>
            Étudiant en Licence 3 Information Communication à l’Université Paris 8, titulaire d’un BAC+4 en communication à l’Institut
            Supérieur de l’Information et de la communication de Kountia en République de Guinée, je m’intéresse particulièrement aux
            relations presse, à la communication institutionnelle et aux stratégies digitales.
          </p>

          <button onClick={handleDownload} className="home__button">
            <i className="fas fa-file-download"></i> Télécharger mon CV
          </button>
        </motion.div>
      </motion.div>

      {/* NOUVELLE SECTION VIDÉO PRÉSENTATION */}
      <motion.section 
        className="home__video-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Présentation Vidéo</h2>
        <div className="home__video-container">
          <ClickVideo src={video1} />
        </div>
      </motion.section>

      {/* MODALS */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <p>Êtes-vous sûr de vouloir télécharger mon CV ?</p>
            <div className="modal__actions">
              <button onClick={confirmDownload} className="modal__button modal__button--confirm">Oui</button>
              <button onClick={cancelDownload} className="modal__button modal__button--cancel">Non</button>
            </div>
          </div>
        </div>
      )}

      {isFormOpen && (
        <div className="form-modal">
          <div className="form-modal__content">
            <h2>Demande de CV</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input name="name" placeholder="Nom" onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <input name="email" placeholder="Email" onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" onChange={handleInputChange} required />
              </div>
              <button type="submit" className="form-button--submit">Envoyer</button>
            </form>
          </div>
        </div>
      )}

      {isConfirmationModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <p>Votre demande a été envoyée avec succès !</p>
            <button onClick={() => setIsConfirmationModalOpen(false)} className="modal__button--confirm">OK</button>
          </div>
        </div>
      )}

      {/* VISION */}
      <motion.section className="vision" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2>Construire, apprendre, innover</h2>
        <p>Chaque projet est une opportunité de progresser.</p>
      </motion.section>

      {/* VALEURS */}
      <motion.section className="values" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2>Ce qui me définit</h2>
        <ul className="values__list">
          <li>💡 Curieux</li>
          <li>🤝 Travail en équipe</li>
          <li>🚀 Résultats</li>
        </ul>
      </motion.section>

      {/* NAVIGATION */}
      <motion.section className="navigation-shortcuts">
        <h2>Explorez</h2>
        <div className="navigation-buttons">
          <button className="nav-button" onClick={() => goToPage('/apropos')}>Qui suis-je ?</button>
          <button className="nav-button" onClick={() => goToPage('/projects')}>Mes Réalisations</button>
        </div>
      </motion.section>

      {/* CITATION */}
      <motion.section className="quote">
        <blockquote>
          « La réputation est le capital le plus précieux d’une entreprise. »
          <span>— Warren Buffett</span>
        </blockquote>
      </motion.section>

    </section>
  );
}

/* COMPOSANT INTERNE POUR LA VIDÉO (Play/Pause/Son) */
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
      <video ref={videoRef} src={src} loop playsInline className="projet-video" />
      <div className={`video-ui-overlay ${isPlaying ? 'is-playing' : 'is-paused'}`}>
        <div className="status-icon">
          {isPlaying ? <div className="pause-icon">||</div> : <div className="play-icon">▶</div>}
        </div>
        {!isPlaying && <p className="video-instruction">Cliquer pour voir en vidéo</p>}
      </div>
    </div>
  );
}

export default Home;