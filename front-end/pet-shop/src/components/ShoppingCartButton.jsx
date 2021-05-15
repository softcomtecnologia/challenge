import React from 'react';
import { Badge, NavItem, NavbarText } from 'reactstrap';
import cart from '../assets/Cart.svg';

import './ShoppingCartButton.style.css';

const ShoppingCartButton = () => (
  <div>
    <NavItem className="shopping-cart">
      <NavbarText>
        <img src={ cart } alt="cart" />
        <Badge color="danger">4</Badge>
        Produtos no Carrinho
      </NavbarText>
    </NavItem>
    <NavItem className="shopping-cart">
      <NavbarText className="price">
        RS: 349,80
      </NavbarText>
    </NavItem>
  </div>
);

export default ShoppingCartButton;
