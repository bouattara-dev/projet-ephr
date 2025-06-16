import React from 'react';
import './Footer.css';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} EPHR. Tous droits réservés.</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
