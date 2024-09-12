import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';
import ShoppingCartButton from './ShoppingCartButton';

import mockedShoppingCart from '../mocks/mockedShoppiingCart';

afterEach(cleanup);

describe('ShoppingCartButton component and children', () => {
  it('should render product count and total price count with 5 and 125.25', () => {
    renderWithRouterAndStore(<ShoppingCartButton />, { route: '/' }, mockedShoppingCart);

    const productsCount = screen.getAllByText('5');

    expect(productsCount).toHaveLength(1);
    expect(productsCount[0]).toBeVisible(1);

    const totalPriceCount = screen.getAllByText('R$ 125.25');

    expect(totalPriceCount).toHaveLength(1);
    expect(totalPriceCount[0]).toBeVisible(1);
  });
});
