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
      console.log('add to cart');
      return {
        ...state,
        //products: [...state.products.concat(payload.product)],
        products: {
          ...state.products,
          basePlanId: payload.product.id
        },
        dueMonthly: state.dueMonthly + payload.product.price,
        totalAmount: state.totalAmount + payload.product.price
      };
    case AT.REMOVE_BASE_PLAN_FROM_CART:
      console.log('remove from cart');
      return {
        ...state,
        //products: [...removeProductFromCart(state.products, payload.product)],
        products: {
          ...state.products,
          basePlanId: ''
        },
        dueMonthly: state.dueMonthly - payload.product.price,
        totalAmount: state.totalAmount - payload.product.price
      };
    case AT.SELECT_ADDON:
      return {
        ...state,
        //products: [...state.products.concat(payload.product)],
        products: {
          ...state.products,
          addonsIds: [...state.products.addonsIds.concat(payload.product.id)]
        },
        dueMonthly: state.dueMonthly + payload.product.price,
        totalAmount: state.totalAmount + payload.product.price
      };
    case AT.REMOVE_ADDON:
      return {
        ...state,
        //products: [...state.products.concat(payload.product)],
        products: {
          ...state.products,
          addonsIds: [
            ...state.products.addonsIds.filter(p => p.id !== payload.product.id)
          ]
        },
        dueMonthly: state.dueMonthly - payload.product.price,
        totalAmount: state.totalAmount - payload.product.price
      };
    default:
      return state;
  }
};

//const addBasePlanToCart = (products, newProduct) => {
//  return products.map(item => {
//    return item.id === newProduct.id
//        ? newProduct
//        : item;
//  });
//};
//
//const removeProductFromCart = (products, toRemove) => {
//  return products.filter(item => item.id !== toRemove.id);
//};

export default cartReducer;