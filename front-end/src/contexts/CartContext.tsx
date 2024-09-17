import { createContext, useState} from "react";
import { ICartProduct, CartContextState } from "../interfaces/ExportInterfaces";

const contextDefaultValues: CartContextState = {
  cart: [],
  handleAddItemCart: () => {}
};

export const CartContext = createContext<CartContextState>(contextDefaultValues);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState<ICartProduct[]>(contextDefaultValues.cart);

  function handleAddItemCart(product: ICartProduct) {
    setCart([...cart, product]);
  }

  return (
    <CartContext.Provider value={{ cart, handleAddItemCart }}>
      {children}
    </CartContext.Provider>
  );
};
