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

    expect(
      reducer(
        {},
        {
          type: types.FETCH_COMPETITIONS_SUCCESS,
          competitions: ['test competition']
        }
      )
    ).toEqual({
      competitions: ['test competition'],
      isFetching: false
    });

    expect(reducer({}, { type: types.FETCH_COMPETITIONS_FAILURE })).toEqual({
      isFetching: false
    });
  });
});
