import { HAMBURGER_MENU_STATUS } from '../action/hamburgerMenuAction';

const INITIAL_STATE = {
  status: false,
};

const hamburgerMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HAMBURGER_MENU_STATUS: return {
      ...state,
      status: action.status,
    };
    default: return state;
  }
};

export default hamburgerMenuReducer;
