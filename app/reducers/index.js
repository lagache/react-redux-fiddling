import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import cars from './cars';
import tiles from './tiles';

const rootReducer = combineReducers({
  cars,
  tiles,
  router: routerStateReducer
});

export default rootReducer;
