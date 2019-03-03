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

export function fetchEventsSuccess(events) {
  console.log(events);
  return {
    type: FETCH_EVENTS_SUCCESS,
    // name: events.name,
    // round: events.round,
    // startTime: events.startTime,
    // endTime: events.endTime,
    // id: events._id
    events
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
    return fetch(`/api/event?competitionId=${id}`)
      .then(response => response.json())
      .then(json => {
        // console.log(json.data)
        dispatch(fetchEventsSuccess(json.data));
      })
      .catch(error => dispatch(fetchEventsFailure('Failed to fetch')));
  };
}
