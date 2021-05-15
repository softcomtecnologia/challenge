export const HANDLE_CART_ITEM = 'HANDLE_CART_ITEM';

export const handleCartItem = (price) => ({
  type: HANDLE_CART_ITEM,
  price,
});
