import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import consumerReducer from './consumers';

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  consumers: consumerReducer
});

export default rootReducer;
