import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
// ----------- STORE IMPORTS -----------
import {
  mainReducer,
  userReducer,
  fetchFromApiMiddleware,
} from './app/app';

const reducer = combineReducers({
  mainReducer,
  userReducer,
});

const composedEnhancer = compose(
  applyMiddleware(fetchFromApiMiddleware),
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
