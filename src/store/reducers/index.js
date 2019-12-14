import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import consumerReducer from './consumers';
import modalReducer from './modal';

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  modal: modalReducer,
  consumers: consumerReducer
});

export default rootReducer;
