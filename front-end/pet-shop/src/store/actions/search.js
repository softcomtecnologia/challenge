export const HANDLE_INPUT = 'HANDLE_INPUT';
// export const HANDLE_ERROR = 'HANDLE_ERROR';

export const handleInput = (inputQuery) => ({
  type: HANDLE_INPUT,
  inputQuery,
});

// export const handleError = (error) => ({
//   type: HANDLE_ERROR,
//   error,
// });

const handleQueryData = (query, data) => ({
  type: HANDLE_INPUT,
  inputQuery: query,
  results: data.results,
});

export const searchQuery = (query) => async (dispatch) => fetch(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=${query}&limit=5`)
  .then((response) => response.json())
  .then((data) => dispatch(handleQueryData(query, data)));
  // .catch((error) => dispatch(handleError(error.message)));
