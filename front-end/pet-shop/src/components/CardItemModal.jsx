/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './CardItemModal.style.css';

const ModalExample = (props) => {
  const {
    // buttonLabel,
    className,
    children,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="light" onClick={ toggle }>{children}</Button>
      <Modal isOpen={ modal } toggle={ toggle } className={ className }>
        <ModalHeader toggle={ toggle }>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
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

export default ModalExample;
