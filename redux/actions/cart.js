import * as AT from '../action-types';

export const addBasePlanToCart = (product) => ({
  type: AT.ADD_BASE_PLAN_TO_CART,
  payload: {product}
});

export const removeBasePlanFromCart = (product) => ({
  type: AT.REMOVE_BASE_PLAN_FROM_CART,
  payload: {product}
});

export const addAddonToCart = (product) => ({
  type: AT.ADD_ADDON_TO_CART,
  payload: {product}
});

export const removeAddonFromCart = (product) => ({
  type: AT.REMOVE_ADDON_FROM_CART,
  payload: {product}
});

export const addCdvrToCart = (product) => ({
  type: AT.ADD_CDVR_TO_CART,
  payload: {product}
});

export const removeCdvrFromCart = (product) => ({
  type: AT.REMOVE_CDVR_FROM_CART,
  payload: {product}
});

export const addStreamingDeviceToCart = (product) => ({
  type: AT.ADD_STREAMING_DEVICE_TO_CART,
  payload: {product}
});

export const removeStreamingDeviceFromCart = (product) => ({
  type: AT.REMOVE_STREAMING_DEVICE_FROM_CART,
  payload: {product}
});