import { product, sections } from "./../common/interfaces";
import * as ActionsTypes from "../common/actionsTypes";

export const updateProductsOnCart = (value: product[]) => ({
  type: ActionsTypes.ADD_PRODUCTS_TO_CART,
  payload: value,
});

export const updatePriceOfProductsOnCart = (value: number) => ({
  type: ActionsTypes.COUNT_PRICE_OF_PRODUCTS_ON_CART,
  payload: value,
});

export const filterProductsThroughSearchBar = (value: string) => ({
  type: ActionsTypes.FILTER_PRODUCTS_BY_QUERY,
  payload: value,
});

export const showProductsOnCart = (value: product) => ({
  type: ActionsTypes.UPDATE_DETAILS_MOD,
  payload: value,
});

export const updateSectionsStore = (value: sections) => ({
  type: ActionsTypes.UPDATE_SECTIONS_STORE,
  payload: value,
});

export const updateCategoriesStore = (value: string[]) => ({
  type: ActionsTypes.UPDATE_CATEGORIES_STORE,
  payload: value,
});
