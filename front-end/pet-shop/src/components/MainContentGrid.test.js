import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import MainContentGrid from './MainContentGrid';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';

import mockedNoResults from '../mocks/mockedNoResults';

afterEach(cleanup);

describe('MainContentGrid component with no results', () => {
  it('should renders not found component with text', () => {
    renderWithRouterAndStore(
      <MainContentGrid />, { route: '/' }, mockedNoResults,
    );

    const notFound = screen.getAllByText('Nada foi encontrado com o termo ZZZZZZZZZ');

    expect(notFound.length).toBe(1);
    expect(notFound[0]).toBeVisible();
  });
});
