import { combineReducers } from 'redux';
import apiProductsReducer from './apiProductsReducer';
import socketReducer from './socketReducer';

const rootReducer = combineReducers({ apiProductsReducer, socketReducer });

export default rootReducer;
