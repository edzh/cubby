import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

import * as types from '../competitionTypes';
import * as actions from '../competitionActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_COMPETITIONS_SUCCESS when fetching competitions has been done', () => {
    fetchMock.get('/api/competition', {
      data: ['test competition'],
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.FETCH_COMPETITIONS_REQUEST },
      {
        type: types.FETCH_COMPETITIONS_SUCCESS,
        competitions: ['test competition']
      }
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchCompetitions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_COMPETITIONS_FAILURE when fetching competitions fails', () => {
    fetchMock.get('/api/competition', { status: 500 });

    const expectedActions = [
      { type: types.FETCH_COMPETITIONS_REQUEST },
      { type: types.FETCH_COMPETITIONS_FAILURE, error: 'Failed to fetch' }
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchCompetitions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
