import { handleResult } from './search';

export const HANDLE_TABS = 'HANDLE_TABS';
export const HANDLE_TAB_NAME = 'HANDLE_TAB_NAME';

const handleTabsN = (query) => ({
  type: HANDLE_TABS,
  tabName: query.replace('+', ' '),
});

const handleQueryData = (query, data) => (dispatch) => {
  dispatch(handleResult(data));
  dispatch(handleTabsN(query));
};

export const handleTabs = (query = '', value = '') => async (dispatch) => fetch(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=${value}+${query}&limit=5`)
  .then((response) => response.json())
  .then((data) => dispatch(handleQueryData(query, data)));
  // .catch((error) => handleError(error.message));
