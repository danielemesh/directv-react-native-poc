import * as AT from '../action-types';

const initialState = {
  isBasePlansCollapsed: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SELECT_BASE_PLAN:
      return {...state, isBasePlansCollapsed: true};
    case AT.CHANGE_BASE_PLAN:
      return {...state, isBasePlansCollapsed: false};
    default:
      return state;
  }
};

export default uiReducer;