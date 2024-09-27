import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import './index.css';
import MarketContext from './context/marketContext';
import ProductsContext from './context/productsContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductsContext>
      <MarketContext>
        <Home />
      </MarketContext>
    </ProductsContext>
  </React.StrictMode>,
  document.getElementById('root'),
);
