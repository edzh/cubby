import 'cross-fetch';

import {
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from './eventTypes';

export function fetchEventsRequest() {
  return {
    type: FETCH_EVENTS_REQUEST
  };
}

export function fetchEventSuccess(events) {
  return {
    type: FETCH_EVENTS_SUCCESS,
    name: events.name,
    round: events.round,
    startTime: events.startTime,
    endTime: events.endTime,
    id: events._id
  };
}

export function fetchEventsFailure(error) {
  return {
    type: FETCH_EVENTS_FAILURE,
    error
  };
}

export function fetchEvents(id) {
  return dispatch => {
    dispatch(fetchEventsRequest());
    return fetch(`/api/event`)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchEventsSuccess(json.data));
      })
      .catch(error => dispatch(fetchEventsFailure('Failed to fetch')));
  };
}
