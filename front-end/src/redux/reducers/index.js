import { combineReducers } from 'redux';
import apiProductsReducer from './apiProductsReducer';
import socketReducer from './socketReducer';
import hamburgerMenuReducer from './hamburgerMenuReducer';
import userDataReducer from './userDataReducer';

const rootReducer = combineReducers({
  apiProductsReducer, socketReducer, hamburgerMenuReducer, userDataReducer
});

export default rootReducer;
