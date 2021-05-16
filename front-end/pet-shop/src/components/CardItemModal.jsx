import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './CardItemModal.style.css';
import { connect } from 'react-redux';
import QuantityModal from './QuantityModal';

const CardItemModal = ({ children, className, image, description, maxQuantity,
  price, freeShipping }) => {
  const [modal, setModal] = useState(false);

  const [quantity, setQuantity] = useState(0);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="light" onClick={ toggle }>{children}</Button>
      <Modal isOpen={ modal } toggle={ toggle } className={ className }>
        <ModalHeader toggle={ toggle }><img src={ image } alt="thumbnail" /></ModalHeader>
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
          <Button color="success" onClick={ toggle }>Adicionar</Button>
          {' '}
          <Button color="danger" onClick={ toggle }>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

CardItemModal.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  description: PropTypes.string,
  maxQuantity: PropTypes.number,
  price: PropTypes.number,
  freeShipping: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  total: state.cartReducer.total,
});

export default connect(mapStateToProps)(CardItemModal);
