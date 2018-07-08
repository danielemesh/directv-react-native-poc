import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/root-reducer';
import api from './middlewares/api';

const storeEnhancers = composeWithDevTools(
    applyMiddleware(api)
);

const store = createStore(rootReducer, {}, storeEnhancers);

export default store;