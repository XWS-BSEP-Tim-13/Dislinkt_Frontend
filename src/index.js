import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';
import allReducers from '../src/store/reducers';
import {createStore,applyMiddleware,compose} from 'redux';
const container = document.getElementById('root');
const root = createRoot(container);


const myLogger = (store)=>(next)=>(action)=>{
    next(action);
  };
  
  const composedEnhancer = compose(applyMiddleware(myLogger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
  const store=createStore(allReducers,composedEnhancer
    );
  
    const persistor = persistStore(store)

root.render(
    <BrowserRouter>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App tab="home" />
        </PersistGate>
    </Provider>
    </BrowserRouter>
);
