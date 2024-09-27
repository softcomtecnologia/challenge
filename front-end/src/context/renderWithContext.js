import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import MarketContext from './marketContext';
import ProductsContext from './productsContext';

export function renderWithContextMarket(component, value) {
  return {
    ...render(<MarketContext value={value}>{component}</MarketContext>),
  };
}

export function renderWithContextProduct(component) {
  return {
    ...render(<ProductsContext>{component}</ProductsContext>),
  };
}

function renderWithContext(component) {
  return {
    ...render(
      <ProductsContext>
        <MarketContext>{component}</MarketContext>,
      </ProductsContext>,
    ),
  };
}

export default renderWithContext;
