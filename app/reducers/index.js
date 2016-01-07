import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import tiles from './tiles';

const rootReducer = combineReducers({
    tiles,
    router: routerStateReducer
});

export default rootReducer;
