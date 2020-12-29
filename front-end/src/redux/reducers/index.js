import { combineReducers } from 'redux';
import apiProductsReducer from './apiProductsReducer';
import socketReducer from './socketReducer';
import hamburgerMenuReducer from './hamburgerMenuReducer';

const rootReducer = combineReducers({ apiProductsReducer, socketReducer, hamburgerMenuReducer });

export default rootReducer;
