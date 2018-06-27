import * as AT from '../action-types';
import { generateGuid } from '../../utils';

const initialState = {
  basePlans: [],
  addons: [],
  cdvrs: [],
  selectedBasePlanId: ''
};

// Base Plans Reducer
const addonsReducer = (state = [], action) => {
  const {type, payload} = action;
  
  switch (type) {
    case AT.SELECT_ADDON:
      return state.map(addon => {
        if (addon.id === payload.id) {
          return {...addon, isSelected: !addon.isSelected};
        }
        return addon;
      });
    default:
      return state;
  }
};

const productsReducer = (state = initialState, action) => {
  const {type, payload} = action;
  
  switch (type) {
    case AT.FETCH_PRODUCTS:
      return state;
    case AT.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...mapProducts(payload)
      };
    case AT.SELECT_BASE_PLAN:
      return {
        ...state,
        selectedBasePlanId: payload.id
      };
    case AT.REMOVE_BASE_PLAN:
      return {
        ...state,
        selectedBasePlanId: ''
      };
    case AT.SELECT_ADDON:
      return {
        ...state,
        addons: [...addonsReducer(state.addons, action)]
      };
    default:
      return state;
  }
};

const mapProducts = (products) => {
  return {
    addons: products.addons.map(addon => ({
      ...addon,
      id: generateGuid(),
      isSelected: false
    })),
    basePlans: products.basePlans.map(plan => ({...plan, id: generateGuid()})),
    cdvrs: products.cdvrs.map(cdvr => ({...cdvr, id: generateGuid()}))
  };
};

export default productsReducer;