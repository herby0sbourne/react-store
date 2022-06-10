const USER_DEFAULT_STATE = {
  currentUser: null,
};

const userReducer = (state = USER_DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.user,
      };

    default:
      return state;
  }
};

export default userReducer;
