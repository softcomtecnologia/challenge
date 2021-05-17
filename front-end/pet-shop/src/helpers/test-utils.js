// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import searchReducer from '../store/reducers/searchReducer';
import tabsReducer from '../store/reducers/tabsReducer';
import cartReducer from '../store/reducers/cartReducer';

const rootReducer = combineReducers({ searchReducer, tabsReducer, cartReducer });

function render(
  ui,
  {
    initialState,
    store = createStore(
      rootReducer, initialState, applyMiddleware(thunk),
    ),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={ store }>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
