import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import search from '../assets/Search.svg';

import './MainSearchInput.style.css';

const MainSearchInput = () => (
  <div className="input-container">
    <br />
    <InputGroup>
      <Input placeholder="O que você procura?" />
      <InputGroupAddon addonType="prepend">
        <InputGroupText><img src={ search } alt="search" /></InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroupAddon addonType="append">
      <Button color="secondary">Pesquisar</Button>
    </InputGroupAddon>
    <br />
  </div>
);

export default MainSearchInput;
