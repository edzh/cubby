import 'cross-fetch';

import {
  FETCH_COMPETITIONS_REQUEST,
  FETCH_COMPETITIONS_SUCCESS,
  FETCH_COMPETITIONS_FAILURE
} from './competitionTypes';

export function fetchCompetitionsRequest() {
  return {
    type: FETCH_COMPETITIONS_REQUEST
  };
}

export function fetchCompetitionsSuccess(competitions) {
  return {
    type: FETCH_COMPETITIONS_SUCCESS,
    competitions
  };
}

export function fetchCompetitionsFailure(error) {
  return {
    type: FETCH_COMPETITIONS_FAILURE,
    error
  };
}

export function fetchCompetitions() {
  return dispatch => {
    dispatch(fetchCompetitionsRequest());
    return fetch('/api/competition')
      .then(response => response.json())
      .then(json => dispatch(fetchCompetitionsSuccess(json.data)))
      .catch(error => dispatch(fetchCompetitionsFailure('Failed to fetch')));
  };
}
