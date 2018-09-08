import { combineReducers } from 'redux';
import configReducer from './configReducer';
import appReducer from './appReducer';

export default combineReducers({
  config: configReducer,
  app: appReducer
});
