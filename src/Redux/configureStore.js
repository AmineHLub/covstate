import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import apiState from './State/apiState';

const reducer = combineReducers({ apiState });

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default store;
