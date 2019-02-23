import { combineReducers } from 'redux';
import cubby from './competitionReducer';
import competition from './competitionPageReducer';
import user from './userReducer';

export default combineReducers({
  cubby,
  competition,
  user
});
