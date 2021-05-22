import * as ActionsTypes from "../common/actionsTypes";

export const updateProductsOnCart = (value) => ({
  type: ActionsTypes.ADD_PRODUCTS_TO_CART,
  payload: value,
});

export const updatePriceOfProductsOnCart = (value) => ({
  type: ActionsTypes.COUNT_PRICE_OF_PRODUCTS_ON_CART,
  payload: value,
});

export const filterProductsThroughSearchBar = (value) => ({
  type: ActionsTypes.FILTER_PRODUCTS_BY_QUERY,
  payload: value,
});

export const showProductsOnCart = (value) => ({
  type: ActionsTypes.UPDATE_DETAILS_MOD,
  payload: value,
});
