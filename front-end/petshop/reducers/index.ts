import { INITIAL_STATE } from "../common/defs";
import * as ActionsTypes from "../common/actionsTypes";

interface I_Initial_State {
  productsOnCart: any[];
  priceOfProductsOnCart: number;
  query: string;
  products: {
    id: number;
    thumbnail: string;
    product_name: string;
    price: number;
    promotion: number;
    description: string[];
  }[];
}

const storeReducer = (
  state: I_Initial_State = INITIAL_STATE,
  action = null
) => {
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
    default:
      return state;
  }
};

export default storeReducer;
