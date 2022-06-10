import cartActionTypes from './cartTypes';
import { addItemToCart } from './cartUtils';

const DROPDOWN_DEFAULT = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = DROPDOWN_DEFAULT, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item),
        // cartItems: [...state.cartItems, action.item],
      };

    default:
      return state;
  }
};

export default cartReducer;
