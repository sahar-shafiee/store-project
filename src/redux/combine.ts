// node libraries
import { combineReducers } from 'redux';
import Products from './reducers/products/index';

// object of All reducers
export const reducerObject = {
      Products
};


// combine all reducers with combineReducers function
export const Reducers = combineReducers(reducerObject);

// create type of Store
export type StoreType = ReturnType<typeof Reducers>;
