import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import search from '../assets/Search.svg';

import './MainSearchInput.style.css';

const MainSearchInput = () => (
  <div className="input-container">
    <br />
    <InputGroup>
      <Input placeholder="Digite um termo para busca" />
      <InputGroupAddon addonType="prepend">
        <InputGroupText><img src={ search } alt="search" /></InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <br />
  </div>
);

export default MainSearchInput;
