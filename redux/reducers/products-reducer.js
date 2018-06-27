import * as AT from '../action-types';
import { generateGuid } from '../../utils';

const initialState = {
  basePlans: [],
  addons: [],
  cdvrs: [],
  selectedBasePlanId: ''
};

// Base Plans Reducer
//const basePlansReducer = (state = [], action) => {
//  const {type, payload} = action;
//
//  switch (type) {
//    case AT.SELECT_BASE_PLAN:
//      return state.map(plan => {
//        if (plan.id === payload.id) {
//          return {...plan, isSelected: true};
//        }
//        return plan;
//      });
//    case AT.REMOVE_BASE_PLAN:
//      return state.map(plan => {
//        if (plan.id === payload.id) {
//          return {...plan, isSelected: false};
//        }
//        return plan;
//      });
//    default:
//      return state;
//  }
//};

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