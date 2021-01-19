import { USER_DATA } from '../action/userDataAction';

const INITIAL_STATE = {
  userData: {}
};

const userDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_DATA: return {
      ...state,
      userData: { ...state.userData, ...action.userData },
    };
    default: return state;
  }
};

export default userDataReducer;
