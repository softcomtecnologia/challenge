import React from 'react';
import { Badge, Button } from 'reactstrap';

const ShoppingCartButton = () => (
  <div>
    <Button color="primary" outline>
      Notifications
      {' '}
      <Badge color="secondary">4</Badge>
      Notifications
      {' '}
      <Badge color="secondary">4</Badge>
    </Button>
  </div>
);

export default ShoppingCartButton;
