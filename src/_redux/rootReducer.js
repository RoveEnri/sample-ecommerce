import { combineReducers } from 'redux';

import StoreReducer from './Store/store.reducers';
import CartReducer from './Cart/cart.reducers';

const rootReducer = combineReducers({
  store: StoreReducer,
  cart: CartReducer
});

export default rootReducer;
