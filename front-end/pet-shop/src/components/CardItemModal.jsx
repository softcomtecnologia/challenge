import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
  ButtonGroup } from 'reactstrap';
import QuantityModal from './QuantityModal';
import { handleCartItem } from '../store/actions/cart';

import './CardItemModal.style.css';

const CardItemModal = ({ children, className, image, description, maxQuantity,
  price, freeShipping, addToCart, total }) => {
  const [modal, setModal] = useState(false);

  const [quantity, setQuantity] = useState(0);

  const toggle = () => setModal(!modal);

  return (
    <section>
      <Button className="card-height" color="light" onClick={ toggle }>{children}</Button>

      <Modal isOpen={ modal } toggle={ toggle } className={ className }>

        <ModalHeader toggle={ toggle }>
          <img className="thumbnail" src={ image } alt="thumbnail" />

        </ModalHeader>
        <ModalBody>
          <ul>
            <li>
              {description}
            </li>
            {freeShipping && (
              <li className="free-shipping">
                Frete grátis
              </li>
            )}
            <li>
              {`RS ${price} cada`}
            </li>
            <li>
              {`Quantidade máxima ${maxQuantity}`}
            </li>
            <li>
              <QuantityModal
                maxQuantity={ maxQuantity }
                setQuantity={ setQuantity }
                quantity={ quantity }
              />
            </li>
          </ul>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button
              className="modal-btn"
              onClick={ () => addToCart((quantity * price), quantity) }
            >
              Adicionar
            </Button>
            {' '}
            <Button className="modal-btn">{`R$ ${total.toFixed(2)}`}</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </section>
  );
};

CardItemModal.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  description: PropTypes.string,
  maxQuantity: PropTypes.number,
  price: PropTypes.number,
  freeShipping: PropTypes.bool,
  addToCart: PropTypes.func,
  addItems: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  total: state.cartReducer.total,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (price, quantity) => dispatch(handleCartItem(price, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardItemModal);
