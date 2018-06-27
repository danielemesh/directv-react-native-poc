import * as AT from '../action-types';
import { generateGuid } from '../../utils';

const initialState = {
  id: generateGuid(),
  discounts: 0,
  dueMonthly: 0,
  totalAmount: 0,
  products: []
};

const cartReducer = (state = initialState, action) => {
  const {type, payload} = action;
  
  switch (type) {
    case AT.SELECT_BASE_PLAN:
      return {
        ...state,
        products: [
          ...state.products,
          payload
        ],
        dueMonthly: state.dueMonthly + payload.price,
        totalAmount: state.totalAmount + payload.price
      };
    default:
      return state;
  }
};

export default cartReducer;