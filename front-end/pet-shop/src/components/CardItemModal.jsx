/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      <Button color="danger" onClick={ toggle }>{children}</Button>
      <Modal isOpen={ modal } toggle={ toggle } className={ className }>
        <ModalHeader toggle={ toggle }>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={ toggle }>Do Something</Button>
          {' '}
          <Button color="secondary" onClick={ toggle }>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
