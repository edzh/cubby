import reducer from '../competitionReducer';
import * as types from 'client/actions/competitionTypes';

describe('competitions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      competitions: [],
      isFetching: false
    });
  });

  it('should hande fetching competitions', () => {
    expect(reducer({}, { type: types.FETCH_COMPETITIONS_REQUEST })).toEqual({
      isFetching: true
    });
    const competitions = [
      { name: 'Test Competition', date: '2020' },
      { name: 'Test Competition 2', date: '2021' }
    ];
    const newState = reducer(undefined, {
      type: types.FETCH_COMPETITIONS_SUCCESS,
      competitions
    });
    expect(newState).toEqual({
      competitions: competitions,
      isFetching: false
    });

    expect(reducer({}, { type: types.FETCH_COMPETITIONS_FAILURE })).toEqual({
      isFetching: false
    });
  });
});
