import shopActionTypes from './shopTypes';

const SHOP_DEFAULT_STATE = {
  collections: null, // you can use any empty array here (WHICH IS BETTER TO ME)
};

const shopReducer = (state = SHOP_DEFAULT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.collectionsMap,
      };
    default:
      return state;
  }
};

export default shopReducer;
