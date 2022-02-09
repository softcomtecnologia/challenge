import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import state from "../reducers";

const middleware = [thunk];

const store = createStore(
  state,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
