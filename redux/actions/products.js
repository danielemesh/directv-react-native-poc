import * as AT from '../action-types';

export const fetchProducts = () => ({
  type: AT.FETCH_PRODUCTS
});

export const fetchProductsSuccess = (products) => ({
  type: AT.FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const selectBasePlan = (product) => ({
  type: AT.SELECT_BASE_PLAN,
  payload: {product}
});

export const removeBasePlan = (product) => ({
  type: AT.REMOVE_BASE_PLAN,
  payload: {product}
});

export const changeBasePlan = () => ({
  type: AT.CHANGE_BASE_PLAN
});

export const selectAddon = (product) => ({
  type: AT.SELECT_ADDON,
  payload: {product}
});

export const selectStreamingDevice = (id) => ({
  type: AT.SELECT_STREAMING_DEVICE,
  payload: {id}
});

export const removeStreamingDevice = () => ({
  type: AT.REMOVE_STREAMING_DEVICE
});

export const selectCdvr = (id) => ({
  type: AT.SELECT_CDVR,
  payload: {id}
});
