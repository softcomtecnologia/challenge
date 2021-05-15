import { HANDLE_TABS } from '../actions/tabs';

const initialState = {
  tabName: '',
};

function tabsReducer(state = initialState, action) {
  switch (action.type) {
  case HANDLE_TABS:
    return {
      ...state,
      tabName: action.inputQuery,
      // results: action.results,
    };
  // case HANDLE_ERROR:
  //   return {
  //     ...state,
  //     error: action.error,
  //   };
  default:
    return state;
  }
}

export default tabsReducer;
