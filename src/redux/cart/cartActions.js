import cartActionTypes from './cartTypes';

export const toggleCartDropdown = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_DROPDOWN,
  };
};
