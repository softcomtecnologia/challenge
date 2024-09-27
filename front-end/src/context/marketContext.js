import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const InitialState = [];

export const marketCtx = createContext(InitialState);

const MarketContext = ({ children, value = null }) => {
  const [market, setMarket] = useState(value ? value : InitialState);

  const addProductToCart = (product) => {
    setMarket([...market, product]);
  };

  return (
    <marketCtx.Provider value={{ market, addProductToCart }}>
      {children}
    </marketCtx.Provider>
  );
};

MarketContext.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.array,
};

export default MarketContext;
