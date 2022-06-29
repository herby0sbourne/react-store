import shopActionTypes from './shopTypes';

const SHOP_DEFAULT_STATE = {
  collections: null, // you can use any empty array here (WHICH IS BETTER TO ME)
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = SHOP_DEFAULT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.collectionsMap,
      };
    case shopActionTypes.FETCH_COLLECTIONS_FALIURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.collectionsMap,
      };
    default:
      return state;
  }
};

export default shopReducer;
