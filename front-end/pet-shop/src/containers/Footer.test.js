import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';
import Footer from './Footer';

import mockedShoppingCart from '../mocks/mockedShoppiingCart';

const MAX_FOOTER_LINKS = 4;

afterEach(cleanup);

describe('Footer component and children', () => {
  it('should render a title with text `Pet Friend Acessories`', () => {
    renderWithRouterAndStore(<Footer />, { route: '/' }, mockedShoppingCart);

    const footerLinks = screen.getAllByRole('link');

    expect(footerLinks).toHaveLength(MAX_FOOTER_LINKS);

    footerLinks.forEach((link) => {
      expect(link).toBeVisible();
    });
  });

  it('should render a logo image', () => {
    renderWithRouterAndStore(<Footer />, { route: '/' }, mockedShoppingCart);

    const logo = screen.getAllByAltText('softcom');

    expect(logo).toHaveLength(1);
    expect(logo[0]).toBeVisible();
  });

  it('should render a subtitle with informations', () => {
    renderWithRouterAndStore(<Footer />, { route: '/' }, mockedShoppingCart);

    const info = screen.getAllByAltText('socialMedias');

    expect(info).toHaveLength(1);
    expect(info[0]).toBeVisible();
  });
});
