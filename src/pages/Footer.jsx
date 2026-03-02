import '../styles/Footer.css'; // Assurez-vous que le chemin est correct
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Diallo Abdoulaye Taha. Tous droits réservés.</p>
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/share/1bu8dmw8Bg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/qr/FKKKLZQJKJX6L1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/abdoulaye-taha-diallo-b335b8252?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        
      </div>
    </footer>
  );
}

export default Footer;
