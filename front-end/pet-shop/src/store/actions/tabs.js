import { handleResult } from './search';

export const HANDLE_TABS = 'HANDLE_TABS';
// export const HANDLE_RESULT = 'HANDLE_RESULT';
export const HANDLE_TAB_NAME = 'HANDLE_TAB_NAME';

// const handleResult = (data) => ({
//   type: HANDLE_RESULT,
//   results: data.results,
// });

// const handleTabName = (query) => ({
//   type: HANDLE_TAB_NAME,
//   tabName: query,
// });

const handleTabsN = (query) => ({
  type: HANDLE_TABS,
  tabName: query.replaceAll('+', ' '),
});

const handleQueryData = (query, data) => (dispatch) => {
  dispatch(handleResult(data));
  dispatch(handleTabsN(query));
};

export const handleTabs = (query = '', value = '') => async (dispatch) => fetch(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=${value}+${query}&limit=5`)
  .then((response) => response.json())
  .then((data) => dispatch(handleQueryData(query, data)));
  // .catch((error) => handleError(error.message));
