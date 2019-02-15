import {
  FETCH_COMPETITIONS_REQUEST,
  FETCH_COMPETITIONS_SUCCESS,
  FETCH_COMPETITIONS_FAILURE
} from '../actions/competitionTypes';

const initialState = {
  competitions: [],
  isFetching: false
};

export default function competitions(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPETITIONS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_COMPETITIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        competitions: action.competitions
      };
    case FETCH_COMPETITIONS_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}
