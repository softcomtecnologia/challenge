import apiML from '../../services/apiMercadoLivre';
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

export const handleTabs = (query = '') => async (dispatch) => apiML(query)
  .then((response) => response.json())
  .then((data) => dispatch(handleQueryData(query, data)));
  // .catch((error) => handleError(error.message));
