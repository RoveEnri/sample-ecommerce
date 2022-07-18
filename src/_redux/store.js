import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

// let store = createStore(rootReducer, applyMiddleware(logger, thunk));

let store = configureStore({ reducer: rootReducer });

export default store;
