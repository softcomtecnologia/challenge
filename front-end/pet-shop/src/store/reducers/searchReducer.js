import { HANDLE_INPUT } from '../actions/search';

const initialState = {
  inputQuery: '',
  results: [],
  error: '',
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
  case HANDLE_INPUT:
    return {
      ...state,
      inputQuery: action.inputQuery,
      results: action.results,
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

export default searchReducer;
