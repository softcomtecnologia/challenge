import { setUncaughtExceptionCaptureCallback } from "process";
import { createContext, useState } from "react";
import { IProduct } from "../interfaces/ExportInterfaces";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  function handleAddItemCart(id, price, qtd) {
    const product = { id, price, qtd };
    setCart([...cart, product]);
  }

  function handleRemoveItemFromCart(clickerItemIndex) {
    const filteredCart = cart.filter(
      (cardIdem) => cart.indexOf(cardIdem) !== clickerItemIndex
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, handleAddItemCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
