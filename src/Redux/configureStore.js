import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import totalStats from './State/totalStats';
import timeReducer from './State/timeState';
import continentReducer from './State/continentSelection';
import countryReducer from './State/countrySelection';
import countryStatsReducer from './State/countryStats';

const reducer = combineReducers({
  timeReducer, continentReducer, countryReducer, totalStats, countryStatsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, Logger),
);

export default store;
