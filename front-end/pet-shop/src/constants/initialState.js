import mockedQuery from '../mocks/mockedQuery';

const initialState = {
  searchReducer: {
    inputQuery: '',
    results: mockedQuery.results,
    error: '',
  },
  tabsReducer: {
    tabName: 'Sugestões do Vendedor',
  },
  cartReducer: {
    cartItems: [],
    total: 0,
  },
};

export default initialState;
