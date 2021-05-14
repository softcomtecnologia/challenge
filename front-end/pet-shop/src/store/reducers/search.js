import { HANDLE_INPUT } from '../actions/search';

const initialState = {
  inputQuery: '',
  results: [],
  error: '',
};

function search(state = initialState, action) {
  switch (action.type) {
  case HANDLE_INPUT:
    return {
      ...state,
      inputQuery: action.inputQuery,
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

export default search;
