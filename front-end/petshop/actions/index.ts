import * as ActionsTypes from "../common/actionsTypes";

interface I_Product {
  id: number;
  thumbnail: string;
  product_name: string;
  price: number;
  promotion: number;
  description: string[];
}

export const updateProductsOnCart = (value: I_Product[]) => ({
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

export const showProductsOnCart = (value: I_Product) => ({
  type: ActionsTypes.UPDATE_DETAILS_MOD,
  payload: value,
});
