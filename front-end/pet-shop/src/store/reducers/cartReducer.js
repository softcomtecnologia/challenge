import { HANDLE_CART_ITEM } from '../actions/cart';

const initialState = {
  cartItems: [],
  total: 0,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
  case HANDLE_CART_ITEM:
    return {
      ...state,
      total: state.total + action.price,
      cartItems: [...state.cartItems, action.price],
      // results: action.results,
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

export default cartReducer;
