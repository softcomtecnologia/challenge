import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const HeaderTabs = () => (
  <div>
    <Nav tabs>
      <NavItem>
        <NavLink href="/sugestions">Sugestões do Vendedor</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/toys" active>Brinquedos</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Camas e Casinhas</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Coleiras</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Ossos e Petiscos</NavLink>
      </NavItem>
    </Nav>
  </div>
);

export default HeaderTabs;
