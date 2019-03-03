import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import SignOut from 'client/containers/SignOutContainer';

export default function Navbar(props) {
  useEffect(() => {
    props.fetchUserInfo(localStorage.getItem('id_token'));
  }, []);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <h1>
        <NavLink to="/" style={{ color: 'white' }}>
          Cubby
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/competition" style={{ color: 'white' }}>
            Competitions
          </NavLink>
        </li>
        <li>
          {!props.isAuthenticated
            ? [
                <NavLink key="0" to="/signin" style={{ color: 'white' }}>
                  Sign In
                </NavLink>,
                <NavLink key="1" to="/signup" style={{ color: 'white' }}>
                  Sign Up
                </NavLink>
              ]
            : [
                <p key="0" style={{ color: 'white' }}>
                  Hi {!props.isFetching && props.user.email}
                </p>,
                <SignOut key="1" />
              ]}
        </li>
      </ul>
    </div>
  );
}
