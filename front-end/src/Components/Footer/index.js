import React from 'react';
import softcom from '../../assets/softcom.png';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import twitterIcon from '../../assets/twitter-icon.png';
import './style.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="employer">
        Desenvolvido por: <img src={softcom} alt="Softcom" />
      </div>
      <a href="#">Politicas de Privacidade</a>
      <a href="#">Termos de Uso</a>
      <div className="network">
        <p>Nossas Redes Sociais</p>
        <div className="icons">
          <SiFacebook className="icons-network-face" />
          <SiInstagram className="icons-network-insta" />
          <img className="tweeter-icon" src={twitterIcon} alt="Tweeter" />
          <SiYoutube className="icons-network-yout" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
