import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import apiState from './State/apiState';
import timeReducer from './State/timeState';

const reducer = combineReducers({ timeReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default store;
