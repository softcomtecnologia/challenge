import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import searchReducer from './reducers/searchReducer';
import tabsReducer from './reducers/tabsReducer';
import cartReducer from './reducers/cartReducer';

const store = createStore(
  combineReducers({ searchReducer, tabsReducer, cartReducer }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
