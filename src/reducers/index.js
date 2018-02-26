import { combineReducers } from 'redux';
import email from './emailReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  email,
  routing: routerReducer
});

export default rootReducer;
