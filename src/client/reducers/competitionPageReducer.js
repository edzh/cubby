import {
  FETCH_COMPETITION_REQUEST,
  FETCH_COMPETITION_SUCCESS,
  FETCH_COMPETITION_FAILURE
} from '../actions/competitionPageTypes';

const initialState = {
  name: '',
  date: '',
  isFetching: false
};

export default function competitionPage(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPETITION_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_COMPETITION_SUCCESS:
      return {
        name: action.name,
        date: action.date,
        isFetching: false
      };

    case FETCH_COMPETITION_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}
