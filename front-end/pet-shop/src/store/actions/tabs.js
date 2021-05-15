export const HANDLE_TABS = 'HANDLE_TABS';

export const handleTabs = (query, value) => async (dispatch) => fetch(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=${value}+${query}&limit=5`)
  .then((response) => response.json())
  .then((data) => dispatch(handleQueryData(query, data)));
  // .catch((error) => handleError(error.message));
