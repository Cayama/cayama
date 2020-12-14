import { SOCKET_REDUX } from '../action/socketToReduxAction';

const INITIAL_STATE = {
  socket: null,
};

const socketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOCKET_REDUX: return {
      ...state,
      socket: action.socket,
    };
    default: return state;
  }
};

export default socketReducer;
