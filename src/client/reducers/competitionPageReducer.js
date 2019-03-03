import {
  FETCH_COMPETITION_REQUEST,
  FETCH_COMPETITION_SUCCESS,
  FETCH_COMPETITION_FAILURE
} from '../actions/competitionPageTypes';

import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from '../actions/eventTypes';

const initialState = {
  name: '',
  date: '',
  isFetching: false,
  events: { isFetching: false }
};

export default function competitionPage(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPETITION_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_COMPETITION_SUCCESS:
      return {
        ...state,
        name: action.name,
        date: action.date,
        address: action.address,
        id: action.id,
        isFetching: false
      };

    case FETCH_COMPETITION_FAILURE:
      return { ...state, isFetching: false };

    case FETCH_EVENTS_REQUEST:
    case FETCH_EVENTS_SUCCESS:
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        events: events(state.events, action)
      };

    default:
      return state;
  }
}

function events(state = { isFetching: false }, action) {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return { ...state, isFetching: true };

    case FETCH_EVENTS_SUCCESS:
      return {
        data: action.events,
        isFetching: false
      };

    case FETCH_EVENTS_FAILURE:
      return {
        isFetching: false
      };

    default:
      return state;
  }
}
