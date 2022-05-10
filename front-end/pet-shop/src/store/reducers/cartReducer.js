import { HANDLE_CART_ITEM } from '../actions/cart';

const initialState = {
  cartItems: 0,
  total: 0,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
  case HANDLE_CART_ITEM:
    return {
      ...state,
      cartItems: state.cartItems + action.quantity,
      total: state.total + action.price,
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
