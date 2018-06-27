import { combineReducers } from 'redux';

import cart from './cart-reducer';
import ui from './ui-reducer';
import products from './products-reducer';

const rootReducer = combineReducers({
  products,
  cart,
  ui,
});

export default rootReducer;