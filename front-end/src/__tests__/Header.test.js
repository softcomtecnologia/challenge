import React from 'react';
import Header from '../Components/Header';
import { renderWithContextMarket } from '../context/renderWithContext';

const setup = (value) => {
  const utils = renderWithContextMarket(<Header />, value);
  const logo = utils.getByRole('img', { name: /logo/i });
  const title = utils.getByText('Pet Friends Acessories');
  const numberProducts = utils.getByTestId('number-products-cart');
  const priceTotalCart = utils.getByTestId('total-price-cart');
  return {
    ...utils,
    logo,
    title,
    numberProducts,
    priceTotalCart,
  };
};

describe('Test Header', () => {
  it('should exist img Logo', () => {
    const { logo } = setup();
    expect(logo).toBeDefined();
  });

  it('should exist Title Pet Friends', () => {
    const { title } = setup();
    expect(title).toBeDefined();
  });

  it('should number products in cart is 0 before add any product cart', () => {
    const { numberProducts } = setup();
    expect(numberProducts.textContent).toContain('0 Produtos no Carrinho');
  });

  it("should price total cart is 0 when don't have products", () => {
    const { priceTotalCart } = setup();
    expect(priceTotalCart.textContent).toContain('R$ 0,00');
  });

  it('should price total cart is 40 and have two products', () => {
    const { priceTotalCart, numberProducts } = setup([
      { price: 20, numberAddProduct: 2 },
    ]);
    expect(numberProducts.textContent).toContain('2 Produtos no Carrinho');
    expect(priceTotalCart.textContent).toContain('R$ 40,00');
  });
});
