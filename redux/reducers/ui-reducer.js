import * as AT from '../action-types';
import consts from '../../globals';

const initialState = {
  isBasePlansCollapsed: false,
  currentScreen: consts.screens.DIRECTV_NOW
};

const uiReducer = (state = initialState, action) => {
  const {payload} = action;
  
  switch (action.type) {
    case AT.SELECT_BASE_PLAN:
      return {...state, isBasePlansCollapsed: true};
    case AT.CHANGE_BASE_PLAN:
      return {...state, isBasePlansCollapsed: false};
    case AT.NAVIGATE_TO_SCREEN:
      return {
        ...state,
        currentScreen: payload.screenId
      };
    default:
      return state;
  }
};

export default uiReducer;