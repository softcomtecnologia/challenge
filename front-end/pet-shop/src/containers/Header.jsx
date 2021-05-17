import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  NavbarText,
} from 'reactstrap';
import HeaderTabs from '../components/HeaderTabs';
import PetFriendsLogo from '../assets/PetFriendsLogo.svg';
import ShoppingCartButton from '../components/ShoppingCartButton';
import open from '../assets/Open.svg';
import delivery from '../assets/Delivery.svg';

import './Header.style.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img className="logo" src={ PetFriendsLogo } alt="logo" />
        </NavbarBrand>

        <NavbarToggler onClick={ toggle } />

        <Collapse isOpen={ isOpen } navbar style={ { justifyContent: 'space-around' } }>
          <Nav className="mr-auto" navbar>
            <NavItem className="title">
              Pet Friend Acessories
              <NavbarText className="open-now">
                <img src={ open } alt="open" />
                ABERTO AGORA
              </NavbarText>
            </NavItem>

            <NavItem>
              <NavbarText>
                Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB
              </NavbarText>
            </NavItem>

            <NavItem>
              <img className="delivery-icon" src={ delivery } alt="delivery" />
              Delivery:
              <NavbarText className="delivery">
                35min - 1h:40m
              </NavbarText>
            </NavItem>

            <NavItem>
              Entrega:
              <NavbarText className="delivery">À partir de R$ 3,00</NavbarText>
            </NavItem>
          </Nav>

          <ShoppingCartButton />

        </Collapse>
      </Navbar>

      <HeaderTabs />

    </header>
  );
};

export default Header;
