import { INITIAL_STATE } from "../common/defs";
import * as ActionsTypes from "../common/actionsTypes";

const state = (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case ActionsTypes.FILTER_PRODUCTS_BY_QUERY:
      return { ...state, products: action.payload };
    case ActionsTypes.ADD_PRODUCTS_TO_CART:
      return { ...state, productsOnCart: action.payload };
    case ActionsTypes.COUNT_PRICE_OF_PRODUCTS_ON_CART:
      return {
        ...state,
        priceOfProductsOnCart: action.payload,
      };
    case ActionsTypes.UPDATE_DETAILS_MOD:
      return {
        ...state,
        desableDetailsScreen: action.payload,
      };
    default:
      return state;
  }
};

export default state;