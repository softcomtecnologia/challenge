
import { ADD_TO_CART, UPDATE_AMOUNT_INCREMENT, ListsAction, ListState, REMOVE_FROM_CART, UPDATE_AMOUNT_DECREMENT } from "types/types";


const initialState: ListState = {
  products: [],
  id: 0,
  amount: 0
}

const List = (state = initialState, action: ListsAction): ListState => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existItem = state.products.find((x) => x.id === product.id);
      if (existItem) {
        return {
          ...state,
          products: state.products.map((x) =>
            x.id === existItem.id ? product : x
          ),
        };
      } else {
        return {
          ...state,
          products: [...state.products, product],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((x) => x.id !== action.payload.id),
      };
    case UPDATE_AMOUNT_INCREMENT: {
      const productIndex = state.products.findIndex(p => p.id === action.payload.id);
      return {
          ...state,
          id: productIndex,
          amount: state.products[productIndex].amount = Number(action.payload.amount+1)
        };
    } 
    case UPDATE_AMOUNT_DECREMENT:
      const productIndex = state.products.findIndex(p => p.id === action.payload.id);
      if(action.payload.amount <= 0){
        return{  
          ...state,
          id:productIndex,
          amount:state.products[productIndex].amount = Number(action.payload.amount+1)

      }}else{
        return {
          ...state,
          id: productIndex,
          amount: state.products[productIndex].amount = Number(action.payload.amount-1)
        };
      }
    default:
      return state;
  }
}
export default List;

