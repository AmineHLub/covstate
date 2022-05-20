import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import totalStats from './MockedState/mockTotalStats';
import timeReducer from './MockedState/mockTimeState';

const reducer = combineReducers({
  timeReducer, totalStats,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default store;
