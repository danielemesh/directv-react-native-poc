import * as AT from '../action-types';

export const addBasePlanToCart = (product) => ({
  type: AT.ADD_BASE_PLAN_TO_CART,
  payload: {product}
});