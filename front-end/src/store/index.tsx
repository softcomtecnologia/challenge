import { combineReducers, createStore } from 'redux';
import List from './modules/cart/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    list: List
  });

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;

export default store;