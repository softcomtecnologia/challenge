import * as sugestions from '../../constants/initialState';
import { HANDLE_INPUT } from '../actions/search';
// import { HANDLE_RESULT } from '../actions/tabs';

export const HANDLE_RESULT = 'HANDLE_RESULT';

const initialState = {
  inputQuery: '',
  results: sugestions.default.searchReducer.results,
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
  case HANDLE_RESULT:
    return {
      ...state,
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
