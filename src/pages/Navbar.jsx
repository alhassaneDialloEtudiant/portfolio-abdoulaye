import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/photos/logo.jpeg'; // Ton logo
import '../styles/Navbar.css'; // Le CSS mis à jour

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingDown(true); // Masquer la navbar
      } else {
        setIsScrollingDown(false); // Afficher la navbar
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isScrollingDown ? 'navbar--hidden' : ''}`}>
      <div className="navbar__container">
        {/* Logo + slogan */}
        <div className="navbar__branding" onClick={closeMenu}>
          <img src={logo} alt="Logo Diallo Alhassane" className="navbar__logo" />
          <span className="navbar__slogan">Innover, créer, réussir</span>
        </div>

        {/* Menu hamburger pour mobile */}
        <button className="navbar__toggle" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Liens de navigation */}
        <ul className={`navbar__links ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/home" className="nav-link" onClick={closeMenu}>Accueil</NavLink></li>
          <li><NavLink to="/apropos" className="nav-link" onClick={closeMenu}>À propos</NavLink></li>
          <li><NavLink to="/projects" className="nav-link" onClick={closeMenu}>Projets</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;