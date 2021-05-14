import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import search from './reducers/search';

const store = createStore(
  combineReducers({ search }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
