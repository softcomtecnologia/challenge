import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import App from './App';
import { renderWithRouterAndStore } from './helpers/renderWithRouterRedux';

afterEach(cleanup);

test('renders learn react link', () => {
  renderWithRouterAndStore(<App />, { route: '/' });
  const sugestions = screen.getAllByText(/sugestões/i);
  expect(sugestions.length).toBe(2);
});
