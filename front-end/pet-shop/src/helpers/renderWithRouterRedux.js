import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { render } from '@testing-library/react';

import search from '../store/reducers/search';

export const getStore = (initialState) => {
  if (!initialState) return createStore(search, applyMiddleware(thunk));
  return createStore(search, initialState, applyMiddleware(thunk));
};

export const renderWithRouterAndStore = (
  component,
  routeConfigs = {},
  initialState,
) => {
  const route = routeConfigs.route || '/';
  const store = getStore(initialState);
  const history = routeConfigs.history
    || createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>{component}</Router>
      </Provider>,
    ),
    history,
    store,
  };
};
