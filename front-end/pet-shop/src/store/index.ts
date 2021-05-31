import { createStore } from "redux";

import state from "../reducers";

const store = createStore(
  state
);

export default store;
