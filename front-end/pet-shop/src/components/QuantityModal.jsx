import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const QuantityModal = ({ maxQuantity, quantity, setQuantity }) => (
  <Pagination aria-label="Page navigation example">
    <PaginationItem>
      <PaginationLink
        disabled={ quantity === 0 }
        tag="button"
        onClick={ () => setQuantity(quantity - 1) }
      >
        -
      </PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationLink disabled>{quantity}</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationLink
        disabled={ quantity === maxQuantity }
        tag="button"
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </PaginationLink>
    </PaginationItem>
  </Pagination>
);

QuantityModal.propTypes = {
  maxQuantity: PropTypes.number,
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
}.isRequired;

export default QuantityModal;
