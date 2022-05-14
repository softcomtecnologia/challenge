export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_AMOUNT_INCREMENT = 'UPDATE_AMOUNT_INCREMENT';
export const UPDATE_AMOUNT_DECREMENT = 'UPDATE_AMOUNT_DECREMENT';
export const CATEGORY_SELECT = 'CATEGORY_SELECT';
export const GET_LISTS = 'GET_LISTS';

interface AddToCart {
  type: typeof ADD_TO_CART;
  payload: product;
}
interface SelectCategory {
  type: typeof CATEGORY_SELECT;
  payload: number;
}
interface RemoveFromCart{
  type: typeof REMOVE_FROM_CART;
  payload: product
}
interface UpdadeAmounIncrement{
  type: typeof UPDATE_AMOUNT_INCREMENT;
  payload:{
    id: number;
    amount: number;
  }
}
interface UpdadeAmountDecrement{
  type: typeof UPDATE_AMOUNT_DECREMENT;
  payload:{
    id: number;
    amount: number;
  }
}
interface GetListsAction {
  type: typeof GET_LISTS;
}
export interface category {
  id:number,
  title:string
  product:product[]
}
export interface product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount:number;
}
export interface products {
  [id: string]: product
}
export interface categorias {
  [id: string]: category
}
export type ListsAction = AddToCart | GetListsAction | RemoveFromCart | UpdadeAmounIncrement | UpdadeAmountDecrement | SelectCategory;

export interface ListState {
  products: product[];
  category: number;
  id:number;
  amount:number;
}