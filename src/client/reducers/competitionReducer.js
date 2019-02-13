import {
  REQUEST_COMPETITIONS,
  RECEIVE_COMPETITIONS
} from '../actions/competitionTypes';

const initialState = {
  competitions: [],
  isFetching: true
};

export default function competitions(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COMPETITIONS:
      return { ...state, isFetching: true };
    case RECEIVE_COMPETITIONS:
      return {
        ...state,
        isFetching: false,
        competitions: action.competitions
      };
    default:
      return state;
  }
}
