import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouterAndStore } from './helpers/renderWithRouterRedux';

test('renders learn react link', () => {
  renderWithRouterAndStore(<App />, { route: '/sugestions' });
  const linkElement = screen.getByText(/sugestoes/i);
  expect(linkElement).toBeInTheDocument();
});
