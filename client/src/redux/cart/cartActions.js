import cartActionTypes from './cartTypes';

export const toggleCartDropdown = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_DROPDOWN,
  };
};

export const addToCart = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    item,
  };
};

export const reduceItem = (item) => {
  return {
    type: cartActionTypes.REDUCE_ITEM,
    item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    id,
  };
};

export const emptyCart = () => {
  return {
    type: cartActionTypes.EMPTY_CART,
  };
};

export const updateCartInFirebase = () => {
  return {
    type: cartActionTypes.UPDATE_CART_IN_FIREBASE,
  };
};

export const setCartFromFirebase = (cartItems) => {
  return {
    type: cartActionTypes.SET_CART_FROM_FIREBASE,
    cartItems,
  };
};
