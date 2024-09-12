export const HANDLE_CART_ITEM = 'HANDLE_CART_ITEM';
export const HANDLE_ITEMS = 'HANDLE_ITEMS';

export const handleCartItem = (price, quantity) => ({
  type: HANDLE_CART_ITEM,
  price,
  quantity,
});
