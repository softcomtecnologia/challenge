import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import CardItemModal from './CardItemModal';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';

import initialState from '../constants/initialState';

afterEach(cleanup);

test('renders learn react link', () => {
  renderWithRouterAndStore(<CardItemModal />, { route: '/' }, initialState);
  const sugestions = screen.getAllByText(/sugestões/i);
  expect(sugestions.length).toBe(2);
});
