import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { render } from '@testing-library/react';

import searchReducer from '../store/reducers/searchReducer';
import tabsReducer from '../store/reducers/tabsReducer';
import cartReducer from '../store/reducers/cartReducer';

const rootReducer = combineReducers({ searchReducer, tabsReducer, cartReducer });

export const getStore = (initialState) => {
  if (!initialState) return createStore(rootReducer, applyMiddleware(thunk));
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
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
