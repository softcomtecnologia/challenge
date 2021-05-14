import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const MainSearchInput = () => (
  <div>
    <br />
    <InputGroup style={ { width: '340px', margin: '10px' } }>
      <Input placeholder="Digite um termo para busca" />
      <InputGroupAddon addonType="prepend">
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <br />
  </div>
);

export default MainSearchInput;
