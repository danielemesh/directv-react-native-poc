import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/root-reducer';
import api from './middlewares/api';

const storeEnhancers = compose(
    applyMiddleware(api)
);

const store = createStore(rootReducer, {}, storeEnhancers);

export default store;