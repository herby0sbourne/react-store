import spinnerActionTypes from './spinnerTypes';

export const isLoading = () => {
  return {
    type: spinnerActionTypes.IS_LOADING,
  };
};
