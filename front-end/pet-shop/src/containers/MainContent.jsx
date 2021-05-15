import React from 'react';
import MainContentGrid from '../components/MainContentGrid';
import MainSearchInput from '../components/MainSearchInput';

import './Sugestions.style.css';

const MainContent = () => (
  <main className="main-content">
    <MainSearchInput />
    Sugestoes do Vendedor
    <MainContentGrid />
  </main>
);

export default MainContent;
