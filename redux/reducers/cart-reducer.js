const cartReducer = (state = {price: 0}, action) => {
  switch (action.type) {
    case 'INC_PRICE':
      console.log('state: ', state);
      console.log('action: ', action);
      return {
        ...state,
        price: state.price + action.payload.price
      };
    default:
      return state;
  }
};

export default cartReducer;