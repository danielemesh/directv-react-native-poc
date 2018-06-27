import * as AT from '../action-types';

export const fetchProducts = () => {
  return {
    type: AT.FETCH_PRODUCTS
  }
};

export const fetchProductsSuccess = (products) => {
  return {
    type: AT.FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
};

export const selectBasePlan = (id) => ({
  type: AT.SELECT_BASE_PLAN,
  payload: {id}
});

export const removeBasePlan = (id) => ({
  type: AT.REMOVE_BASE_PLAN,
  payload: {id}
});

export const changeBasePlan = () => ({
  type: AT.CHANGE_BASE_PLAN
});