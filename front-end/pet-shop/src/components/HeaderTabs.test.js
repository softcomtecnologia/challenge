import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import HeaderTabs from './HeaderTabs';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';
import headerTabsNames from '../constants/headerTabsNames';

const MAX_NAV_TAB_LINKS = 5;

afterEach(cleanup);

describe('HeaderTabs component and its children', () => {
  it('should renders five navigation links', () => {
    renderWithRouterAndStore(<HeaderTabs />, { route: '/' });

    const tabLinks = screen.getAllByRole('link');

    expect(tabLinks.length).toBe(MAX_NAV_TAB_LINKS);
  });

  it('should matches all nav links text content', () => {
    renderWithRouterAndStore(<HeaderTabs />, { route: '/' });

    const tabLinks = screen.getAllByRole('link');

    expect(tabLinks.length).toBe(MAX_NAV_TAB_LINKS);

    tabLinks.forEach((link, index) => {
      expect(link.firstChild.innerHTML).toBe(Object.values(headerTabsNames)[index]);
    });
  });
});
