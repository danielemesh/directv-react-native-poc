import * as AT from '../action-types';
import { fetchProductsSuccess } from '../actions/products';

const api = store => next => action => {
  if (action.type === AT.FETCH_PRODUCTS) {
    fetch('https://directvnow-react-native-poc.firebaseio.com/products.json')
        .then(response => response.json())
        .then(resJson => next(fetchProductsSuccess(resJson)))
        .catch(error => console.log(`Network error:`, error));
  }
  
  return next(action);
};

export default api;