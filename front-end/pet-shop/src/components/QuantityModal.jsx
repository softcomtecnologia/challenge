import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const QuantityModal = () => (
  <Pagination aria-label="Page navigation example">
    <PaginationItem>
      <PaginationLink href="#">-</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">+</PaginationLink>
    </PaginationItem>
  </Pagination>
);

export default QuantityModal;
