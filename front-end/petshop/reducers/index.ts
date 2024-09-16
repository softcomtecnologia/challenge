import { INITIAL_STATE } from "../common/defs";
import * as ActionsTypes from "../common/actionsTypes";

const storeReducer = (state = INITIAL_STATE, action = null) => {
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
    case ActionsTypes.UPDATE_CATEGORIES_STORE:
      return {
        ...state,
        categories: action.payload,
      };
    case ActionsTypes.UPDATE_SECTIONS_STORE:
      return {
        ...state,
        sections: action.payload,
      };
    default:
      return state;
  }
};

export default storeReducer;
