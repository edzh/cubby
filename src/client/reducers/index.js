import { combineReducers } from 'redux';
import cubby from './competitionReducer';
import competition from './competitionPageReducer';

export default combineReducers({
  cubby,
  competition
});
