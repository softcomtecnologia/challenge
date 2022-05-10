import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';

import mockedNoResults from '../mocks/mockedNoResults';

afterEach(cleanup);

describe('NotFound component and children', () => {
  it('should render a message when found no results', async () => {
    renderWithRouterAndStore(
      <NotFound />, { route: '/' }, mockedNoResults,
    );

    const notFound = screen.getAllByText('Nada foi encontrado com o termo ZZZZZZZZZ');

    expect(notFound).toHaveLength(1);
  });
});
