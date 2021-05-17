import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';
import Header from './Header';

import mockedShoppingCart from '../mocks/mockedShoppiingCart';

afterEach(cleanup);

describe('Header component and children', () => {
  it('should render a title with text `Pet Friend Acessories`', () => {
    renderWithRouterAndStore(<Header />, { route: '/' }, mockedShoppingCart);

    const headerTitle = screen.getAllByText('Pet Friend Acessories');

    expect(headerTitle).toHaveLength(1);
    expect(headerTitle[0]).toBeVisible();
  });

  it('should render a logo image', () => {
    renderWithRouterAndStore(<Header />, { route: '/' }, mockedShoppingCart);

    const logo = screen.getAllByAltText('logo');

    expect(logo).toHaveLength(1);
    expect(logo[0]).toBeVisible();
  });

  it('should render a subtitle with informations', () => {
    renderWithRouterAndStore(<Header />, { route: '/' }, mockedShoppingCart);

    const info = screen.getAllByText(/joão pessoa/i);

    expect(info).toHaveLength(1);
    expect(info[0]).toBeVisible();
  });
});
