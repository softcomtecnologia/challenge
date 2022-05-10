import { HANDLE_TABS } from '../actions/tabs';

const initialState = {
  tabName: 'Sugestões do Vendedor',
};

function tabsReducer(state = initialState, action) {
  switch (action.type) {
  case HANDLE_TABS:
    return {
      ...state,
      tabName: action.tabName,
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
