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
        products: [...state.products.concat(payload.product)],
        dueMonthly: state.dueMonthly + payload.product.price,
        totalAmount: state.totalAmount + payload.product.price
      };
    case AT.REMOVE_BASE_PLAN:
      return {
        ...state,
        products: [...removeProductFromCart(state.products, payload.product)],
        dueMonthly: state.dueMonthly - payload.product.price,
        totalAmount: state.totalAmount - payload.product.price
      };
    case AT.SELECT_ADDON:
      if (!payload.product.isSelected) {
        return {
          ...state,
          products: [...state.products.concat(payload.product)],
          dueMonthly: state.dueMonthly + payload.product.price,
          totalAmount: state.totalAmount + payload.product.price
        };
      }
      return {
        ...state,
        products: [...state.products.filter(p => p.id !== payload.product.id)],
        dueMonthly: state.dueMonthly - payload.product.price,
        totalAmount: state.totalAmount - payload.product.price
      };
    default:
      return state;
  }
};

const addBasePlanToCart = (products, newProduct) => {
  return products.map(item => {
    return item.id === newProduct.id
        ? newProduct
        : item;
  });
};

const removeProductFromCart = (products, toRemove) => {
  return products.filter(item => item.id !== toRemove.id);
};

export default cartReducer;