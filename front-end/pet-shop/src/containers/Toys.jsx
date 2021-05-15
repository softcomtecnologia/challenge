import React from 'react';
import MainContentGrid from '../components/MainContentGrid';
import MainSearchInput from '../components/MainSearchInput';

import './Toys.style.css';

const Toys = () => (
  <main className="main-content">
    <MainSearchInput />
    Brinquerdos
    <MainContentGrid />
  </main>
);

export default Toys;
