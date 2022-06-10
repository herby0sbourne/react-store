import cartActionTypes from './cartTypes';

const DROPDOWN_DEFAULT = {
  hidden: true,
};

const cartReducer = (state = DROPDOWN_DEFAULT, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
