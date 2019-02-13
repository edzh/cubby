import fetch from 'cross-fetch';

import { REQUEST_COMPETITIONS, RECEIVE_COMPETITIONS } from './competitionTypes';

export function requestCompetitions() {
  return {
    type: REQUEST_COMPETITIONS
  };
}

export function receiveCompetitions(competitions) {
  return {
    type: RECEIVE_COMPETITIONS,
    competitions
  };
}

export function fetchCompetitions() {
  return dispatch => {
    dispatch(requestCompetitions);
    return fetch('http://localhost:3001/api/competition')
      .then(response => response.json())
      .then(json => dispatch(receiveCompetitions(json.data)));
  };
}
