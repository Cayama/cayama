import { USER_DATA, USER_SIGN_OUT } from '../action/userDataAction';

const INITIAL_STATE = {
  userData: {
    addresses: [],
  }
};

const userDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SIGN_OUT:
      return {
        userData: {
          addresses: [],
        }
      };
    case USER_DATA:
      return {
        ...state,
        userData: { ...state.userData, ...action.userData },
      };
    default: return state;
  }
};

export default userDataReducer;
