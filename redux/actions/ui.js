import * as AT from '../action-types';

export const changeBasePlan = () => ({
  type: AT.CHANGE_BASE_PLAN,
});

export const navigateToScreen = (screenId) => ({
  type: AT.NAVIGATE_TO_SCREEN,
  payload: {screenId}
});