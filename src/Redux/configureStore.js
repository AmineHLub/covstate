import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import totalStats from './State/totalStats';
import timeReducer from './State/timeState';
import continentReducer from './State/continentSelection';
import countryReducer from './State/countrySelection';

const reducer = combineReducers({
  timeReducer, continentReducer, countryReducer, totalStats,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default store;
