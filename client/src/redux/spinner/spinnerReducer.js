import spinnerActionTypes from './spinnerTypes';

const SPINNER_DEFAULT = {
  isLoading: true,
};

const spinnerReducer = (state = SPINNER_DEFAULT, action) => {
  switch (action.type) {
    case spinnerActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};

export default spinnerReducer;
