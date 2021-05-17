import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';
import MobileFooter from './MobileFooter';

import mockedShoppingCart from '../mocks/mockedShoppiingCart';

afterEach(cleanup);

describe('MobileFooter component and children', () => {
  it('should render a title with text `Pet Friend Acessories`', () => {
    renderWithRouterAndStore(<MobileFooter />, { route: '/' }, mockedShoppingCart);

    const productsCount = screen.getAllByText('5 Produtos no Carrinho');

    expect(productsCount).toHaveLength(1);
    expect(productsCount[0]).toBeVisible(1);

    const totalPriceCount = screen.getAllByText('R$ 125.25');

    expect(totalPriceCount).toHaveLength(1);
    expect(totalPriceCount[0]).toBeVisible(1);
  });
});
