import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Badge, NavItem, NavbarText } from 'reactstrap';
import cart from '../assets/Cart.svg';

import './ShoppingCartButton.style.css';

const ShoppingCartButton = ({ cartItems, total }) => (
  <div>
    <NavItem className="shopping-cart">
      <NavbarText>
        <img src={ cart } alt="cart" />
        <Badge color="danger">{cartItems}</Badge>
        Produtos no Carrinho
      </NavbarText>
    </NavItem>

    <NavItem className="shopping-cart">
      <NavbarText className="price">
        {`R$ ${total.toFixed(2)}`}
      </NavbarText>
    </NavItem>
  </div>
);

ShoppingCartButton.propTypes = {
  cartItems: PropTypes.number,
  total: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
  total: state.cartReducer.total,
});

export default connect(mapStateToProps)(ShoppingCartButton);
