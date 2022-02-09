import { createContext, useState } from "react";

export const CartContext = createContext({})

export const CartProvider = (props: any)=>{
    const [cartValue, setCartValue] = useState(0 as number);
    const [cartItems, setCartItems] = useState([] as Array<string>);
    const [showModal, setShowModal] = useState(false as boolean);
    const [quantity, setQuantity] = useState(1 as number);

    const closeModal = () => {
        setShowModal(false)
        setQuantity(1)
    }

    const openModal = async () => {
        setShowModal(true)
    }
    const subtractOne = () => {
        if (quantity === 0) {
          setQuantity(0)
        } else {
          setQuantity(quantity - 1)
        }
      }
      const addOne = () => {
    
        setQuantity(quantity + 1)
    
      }
      const addCart = (priceItem: number, quantityItem: number, id: string) => {
        if (quantity === 0) {
          closeModal()
        } else {
          closeModal()
          setCartValue((priceItem * quantityItem) + cartValue);
          setCartItems([...cartItems, id]);
          setQuantity(1)
        }
      }
    return(
        <CartContext.Provider value={{
            cartValue,
            cartItems,
            showModal,
            quantity,
            closeModal,
            openModal,
            subtractOne,
            addOne,
            addCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}