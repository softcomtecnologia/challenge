import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  NavbarText,
} from 'reactstrap';
import HeaderTabs from '../components/HeaderTabs';
import PetFriendsLogo from '../assets/PetFriendsLogo.svg';
import ShoppingCartButton from '../components/ShoppingCartButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={ PetFriendsLogo } alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={ toggle } />
        <Collapse isOpen={ isOpen } navbar style={ { justifyContent: 'space-around' } }>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavbarText>Aberto agora</NavbarText>
            </NavItem>
            <NavItem>
              <NavbarText>Delivery:</NavbarText>
            </NavItem>
            <NavItem>
              <NavbarText>Entregas: À partir de R$ 3,00</NavbarText>
            </NavItem>
          </Nav>
          <ShoppingCartButton />
        </Collapse>
      </Navbar>
      <HeaderTabs />
    </div>
  );
};

export default Header;
