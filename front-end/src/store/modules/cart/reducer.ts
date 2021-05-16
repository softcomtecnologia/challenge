import { ADD_TO_CART, UPDATE_AMOUNT_INCREMENT, ListsAction, ListState, REMOVE_FROM_CART, UPDATE_AMOUNT_DECREMENT, CATEGORY_SELECT } from "types/types";


const initialState: ListState = {
  products:[],
  category:0,
  id: 0,
  amount: 0
}

const List = (state = initialState, action: ListsAction): ListState => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existItem = state.products.find((x) => x.title === product.title);
      console.log(existItem)
      if (existItem) {
        return {
          ...state,
          products: state.products.map((x) =>
            x.title === existItem.title ? product : x
          ),
        };
      } else {
        return {
          ...state,
          products: [...state.products, product],
        };
      }
      case CATEGORY_SELECT:
        return {
          ...state,
          category: action.payload,
        };
      
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((x) => x.title !== action.payload.title),
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

