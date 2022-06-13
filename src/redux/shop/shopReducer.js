import SHOP_DATA from './shopdata';

const SHOP_DEFAULT_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = SHOP_DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
