import { combineReducers } from 'redux';
import { userInfo } from './userInfo';
import { localTrails } from './localTrails';

const rootReducer = combineReducers({
  userInfo,
  localTrails
})

export default rootReducer;
