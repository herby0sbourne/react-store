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
