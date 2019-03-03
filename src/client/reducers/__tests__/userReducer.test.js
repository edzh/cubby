import reducer from '../userReducer';
import * as types from 'client/actions/userTypes';

describe('users reducer', () => {
  it('should return initial state', () => {
    // global.localStorage = {
    //   getItem: jest.fn()
    // }
    // expect(localStorage.getItem).toHaveBeenCalled()
    // expect(reducer(undefined, {})).toEqual({
    //   isAuthenticated: true,
    //   isFetching: true
    // })
  });

  it('should sign in', () => {
    expect(
      reducer({ isAuthenticated: false }, { type: types.SIGNIN_REQUEST })
    ).toEqual({
      isFetching: true,
      isAuthenticated: false
    });

    const data = {
      id: 'id123',
      email: 'test@test.com'
    };

    const newState = reducer(undefined, {
      type: types.SIGNIN_SUCCESS,
      data
    });

    expect(newState).toEqual({
      data: data,
      isAuthenticated: true,
      isFetching: false
    });
  });

  it('should sign up', () => {
    expect(
      reducer({ isAuthenticated: false }, { type: types.SIGNUP_REQUEST })
    ).toEqual({
      isFetching: true,
      isAuthenticated: false
    });

    const data = {
      id: 'id123',
      email: 'test@test.com'
    };

    const newState = reducer(undefined, {
      type: types.SIGNUP_SUCCESS,
      data
    });

    expect(newState).toEqual({
      data: data,
      isAuthenticated: true,
      isFetching: false
    });
  });

  it('should sign out', () => {
    const data = {
      id: 'id123',
      email: 'test@test.com'
    };

    expect(
      reducer(
        { isAuthenticated: true, data: data },
        { type: types.SIGNOUT_REQUEST }
      )
    ).toEqual({
      isAuthenticated: false,
      data: {}
    });
  });
});
