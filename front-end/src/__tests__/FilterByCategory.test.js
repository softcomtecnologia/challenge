import React from 'react';
import { renderWithContextProduct } from '../context/renderWithContext';
import Filter from '../Components/FilterByCategory';
import userEvent from '@testing-library/user-event';

const active = 'li-active';

const setup = () => {
  return { ...renderWithContextProduct(<Filter />) };
};

describe('test NavBar', () => {
  it('should the first link must be active ', () => {
    const { getByText } = setup();
    const suggestion = getByText('Sugestão do Vendedor');
    expect(suggestion.className).toBe(active);
  });

  it('should the second link must be active and first not active ', () => {
    const { getByText } = setup();
    const suggestion = getByText('Sugestão do Vendedor');
    const toys = getByText(/brinquedos/i);
    userEvent.click(toys);
    expect(suggestion.className).not.toBe(active);
    expect(toys.className).toBe(active);
  });
});
