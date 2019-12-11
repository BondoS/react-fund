import { combineReducers } from 'redux';
import consumerReducer from './consumers';

const rootReducer = combineReducers({
  consumers: consumerReducer
});

export default rootReducer;
