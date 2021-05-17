import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Badge } from 'reactstrap';
import cart from '../assets/CartWhite.svg';

import './MobileFooter.style.css';

const MobileFooter = ({ total, cartItems }) => {
  const footer = 'footer';
  return (
    <footer className="mobile-footer">
      <Button className="cart-btn">
        <img className="cart-icon" src={ cart } alt="cart" />
        <Badge className="cart-btn-products">
          {`${cartItems} Produtos no Carrinho`}
        </Badge>
        <Badge className="cart-btn-total">{`R$ ${total.toFixed(2)}`}</Badge>
      </Button>
    </footer>
  );
};

MobileFooter.propTypes = {
  total: PropTypes.number,
  cartItems: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  total: state.cartReducer.total,
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps)(MobileFooter);
