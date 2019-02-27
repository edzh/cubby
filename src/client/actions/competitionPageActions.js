import 'cross-fetch';

import {
  FETCH_COMPETITION_REQUEST,
  FETCH_COMPETITION_SUCCESS,
  FETCH_COMPETITION_FAILURE
} from './competitionPageTypes';

export function fetchCompetitionRequest() {
  return {
    type: FETCH_COMPETITION_REQUEST
  };
}

export function fetchCompetitionSuccess(competition) {
  return {
    type: FETCH_COMPETITION_SUCCESS,
    name: competition.name,
    date: competition.date,
    address: competition.address,
    id: competition._id
  };
}

export function fetchCompetitionFailure(error) {
  return {
    type: FETCH_COMPETITION_FAILURE,
    error
  };
}

export function fetchCompetition(id) {
  return dispatch => {
    dispatch(fetchCompetitionRequest());
    return fetch(`/api/competition/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchCompetitionSuccess(json.data));
      })
      .catch(error => dispatch(fetchCompetitionFailure('Failed to fetch')));
  };
}
