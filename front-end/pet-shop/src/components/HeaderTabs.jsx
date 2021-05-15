import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './HeaderTabs.style.css';

const HeaderTabs = () => (
  <div>
    <Nav tabs>
      <NavItem>
        <NavLink href="/sugestoes">Sugestões do Vendedor</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/brinquedos" active>Brinquedos</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/camas-e-casinhas">Camas e Casinhas</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/coleiras">Coleiras</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/ossos-e-petiscos">Ossos e Petiscos</NavLink>
      </NavItem>
    </Nav>
  </div>
);

export default HeaderTabs;
