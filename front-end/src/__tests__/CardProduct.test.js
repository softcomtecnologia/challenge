import userEvent from '@testing-library/user-event';
import React from 'react';
import CardProduct from '../Components/CardProduct';
import { renderWithContextProduct } from '../context/renderWithContext';

const setup = (value) => {
  // id, title, img, price, discount
  const utils = renderWithContextProduct(
    <CardProduct
      id="MLB1106654054"
      img="http://http2.mlstatic.com/D_980827-MLB44663271411_012021-O.jpg"
      title="Cercado Para Porquinho Da Índia Com Toca, Soft E Porta Feno"
      price={189}
      discount={10}
    />,
  );
  const title = utils.getByTestId('title-card');
  const imgCard = utils.getByTestId('img-card');
  const priceCard = utils.getByTestId('price-card');
  const buttonBuy = utils.getByTestId('button-cart-buy');

  return {
    ...utils,
    title,
    imgCard,
    priceCard,
    buttonBuy,
  };
};

describe('Test in CardProduct', () => {
  it('should have img in card', () => {
    const { imgCard } = setup();
    expect(imgCard).toBeTruthy();
  });

  it('should have title in card', () => {
    const { title } = setup();
    expect(title).toBeTruthy();
  });

  it('should have price with discount in card', () => {
    const { priceCard } = setup();
    expect(priceCard.textContent).toContain('170,10');
  });
});
