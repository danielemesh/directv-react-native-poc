import * as AT from '../action-types';
import { generateGuid } from '../../utils';

const initialState = {
  id: generateGuid(),
  discounts: 0,
  dueMonthly: 0,
  totalAmount: 0,
  products: {
    basePlanId: '',
    addonsIds: [],
    cdvrId: '',
    streamingDeviceId: ''
  }
};

const cartReducer = (state = initialState, action) => {
  const {type, payload} = action;
  
  switch (type) {
    case AT.ADD_BASE_PLAN_TO_CART:
      return {
        ...state,
        products: {
          ...state.products,
          basePlanId: payload.product.id
        },
        dueMonthly: state.dueMonthly + payload.product.price,
        totalAmount: state.totalAmount + payload.product.price
      };
    case AT.REMOVE_BASE_PLAN_FROM_CART:
      return {
        ...state,
        products: {
          ...state.products,
          basePlanId: ''
        },
        dueMonthly: state.dueMonthly - payload.product.price,
        totalAmount: state.totalAmount - payload.product.price
      };
    case AT.ADD_ADDON_TO_CART:
      return {
        ...state,
        products: {
          ...state.products,
          addonsIds: [...state.products.addonsIds.concat(payload.product.id)]
        },
        dueMonthly: state.dueMonthly + payload.product.price,
        totalAmount: state.totalAmount + payload.product.price
      };
    case AT.REMOVE_ADDON_FROM_CART:
      return {
        ...state,
        products: {
          ...state.products,
          addonsIds: [...state.products.addonsIds.filter(p => p !== payload.product.id)]
        },
        dueMonthly: state.dueMonthly - payload.product.price,
        totalAmount: state.totalAmount - payload.product.price
      };
    case AT.ADD_CDVR_TO_CART:
      return {
        ...state,
        products: {
          ...state.products,
          cdvrId: payload.product.id
        },
        dueMonthly: state.dueMonthly + payload.product.price,
        totalAmount: state.totalAmount + payload.product.price
      };
    case AT.REMOVE_CDVR_FROM_CART:
      return {
        ...state,
        products: {
          ...state.products,
          cdvrId: payload.product.id
        },
        dueMonthly: state.dueMonthly - payload.product.price,
        totalAmount: state.totalAmount - payload.product.price
      };
    default:
      return state;
  }
};

export default cartReducer;