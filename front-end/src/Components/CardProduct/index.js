import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { FaCartPlus } from 'react-icons/fa';
import { productsCtx } from '../../context/productsContext';

function CardProduct({ id, title, img, price, discount = 0 }) {
  const { handleShowProductDetails } = useContext(productsCtx);
  return (
    <div className="card-content">
      <img
        className="product-img"
        src={img}
        alt={title.substr(0, 22) + '...'}
        data-testid="img-card"
      />
      <h2 className="product-title" data-testid="title-card">
        {title}
      </h2>
      {discount ? (
        <div className="price" data-testid="price-card">
          <div>
            <div className="discount-value">{discount}% OFF</div>
            <span className="precede-preco">De:</span>{' '}
            <span className="desconto">
              {price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <br />
            <span className="precede-preco">Por:</span>{' '}
            {(price - (price * discount) / 100).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
          <FaCartPlus
            className="cart-buy-icon"
            data-testid="button-cart-buy"
            onClick={() => handleShowProductDetails(id)}
          />
        </div>
      ) : (
        <div className="price">
          {price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
          <FaCartPlus
            className="cart-buy-icon"
            onClick={() => handleShowProductDetails(id)}
          />
        </div>
      )}
    </div>
  );
}

CardProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
};

export default CardProduct;
