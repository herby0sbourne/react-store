import cartActionTypes from './cartTypes';
import { addItemToCart, removeItemFromCart } from './cartUtils';

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

    case cartActionTypes.REDUCE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.item),
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.id),
      };

    case cartActionTypes.EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };

    case cartActionTypes.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
