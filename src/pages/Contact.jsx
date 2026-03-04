import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
    captchaInput: ''
  });
  const [captcha, setCaptcha] = useState('');
  const [captchaAttempts, setCaptchaAttempts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validateForm = () => {
    const { name, email, message, honeypot, captchaInput } = formData;
    if (honeypot) return false;
    if (name.length < 2 || name.length > 50) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    if (message.length < 10 || message.length > 1000) return false;
    if (captchaInput !== captcha) return false;
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.captchaInput !== captcha) {
      setCaptchaAttempts(prev => prev + 1);
      if (captchaAttempts >= 2) {
        setFeedback({ type: 'error', message: "Vous avez fait plusieurs erreurs. Merci de bien vérifier le code." });
      } else {
        setFeedback({ type: 'error', message: "Captcha incorrect. Veuillez réessayer." });
      }
      generateCaptcha();
      return;
    }

    if (!validateForm()) {
      setFeedback({ type: 'error', message: "Veuillez remplir correctement tous les champs." });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_kbwqunm",
        "template_aaf1u8p",
        {
          name: formData.name,
          email: formData.email,
          message: formData.reason
        },
        "AmnqPHDXK4jt_6rN-"
      )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '', honeypot: '', captchaInput: '' });
      setCaptchaAttempts(0);
      generateCaptcha();
    })
    .catch((error) => {
      setLoading(false);
      console.error("Erreur EmailJS :", error);
      setFeedback({ type: 'error', message: "Une erreur est survenue lors de l'envoi. Merci de réessayer." });
    });
  };

  return (
    <div className="contact-container">
      {!success ? (
        <>
          <motion.h3 className="contact-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Me contacter
          </motion.h3>

          <motion.p className="contact-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Vous avez un projet, une opportunité ou une question ? Envoyez-moi un message via ce formulaire !
          </motion.p>

          <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Votre e-mail" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Votre message..." rows="6" value={formData.message} onChange={handleChange} required></textarea>

            <div className="captcha-box">
              <span className="captcha-code">{captcha}</span>
              <button type="button" className="refresh-captcha" onClick={generateCaptcha}>🔄</button>
            </div>
            <input 
              type="text"
              name="captchaInput"
              placeholder="Recopiez le code ci-dessus"
              value={formData.captchaInput}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? <div className="spinner"></div> : 'Envoyer'}
            </button>
          </motion.form>

          {feedback && (
            <div className={`feedback ${feedback.type}`}>
              {feedback.message}
            </div>
          )}

        </>
      ) : (
        <motion.div className="success-animation" initial={{ scale: 0 }} animate={{ scale: 1.3 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="success-icon">✅</div>
          <p className="success-text">Merci pour votre message !</p>
          <p className="success-subtext">Je vous répondrai très vite.</p>
        </motion.div>
      )}
    </div>
  );
}

export default Contact;
