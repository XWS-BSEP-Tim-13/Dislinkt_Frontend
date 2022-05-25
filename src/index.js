import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store/store';
import store from './store/store'; 
const container = document.getElementById('root');
const root = createRoot(container);



root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App tab="home" />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
