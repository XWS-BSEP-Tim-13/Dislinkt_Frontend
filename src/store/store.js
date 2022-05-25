import { persistStore } from 'redux-persist';
import allReducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
const myLogger = (store) => (next) => (action) => {
    next(action);
};

const composedEnhancer = compose(applyMiddleware(myLogger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(allReducers, composedEnhancer
);

const persistor = persistStore(store)

export default store
export {persistor}