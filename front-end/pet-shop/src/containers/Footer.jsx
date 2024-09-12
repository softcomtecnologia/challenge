import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import softcom from '../assets/Softcom.svg';
import socialMedias from '../assets/SocialMedias.svg';

import './Footer.style.css';

const Footer = () => (
  <footer className="web-footer">
    <Nav tabs>
      <NavItem>
        <NavLink
          href="http://softcom.com.br/"
          className="external"
          target="_blank"
        >
          <img src={ softcom } alt="softcom" />
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink className="external" href="#">Politicas de Privacidade</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="external" href="#">Termos de Uso</NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="#"
          className="external"
        >
          <img src={ socialMedias } alt="socialMedias" />
        </NavLink>
      </NavItem>
    </Nav>
  </footer>

);

export default Footer;
