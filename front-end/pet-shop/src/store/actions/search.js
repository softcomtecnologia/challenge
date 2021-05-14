export const HANDLE_INPUT = 'HANDLE_INPUT';

export const handleInput = (inputQuery) => ({
  type: HANDLE_INPUT,
  inputQuery,
});

// export const handleError = (error) => ({
//   type: HANDLE_ERROR,
//   error,
// });

// export const fetchIssues = (query) => async (dispatch) => getIssues(query)
//   .then((response) => response.json())
//   .then((data) => dispatch(handleIssues(data)))
//   .catch((error) => handleError(error.message));
