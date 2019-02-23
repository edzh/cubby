import React from 'react';
import { NavLink } from 'react-router-dom';

import SignOut from 'client/containers/SignOutContainer';

export default function Navbar(props) {
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
          {!props.isAuthenticated ? (
            [
              <NavLink to="/signin" style={{ color: 'white' }}>
                Sign In
              </NavLink>,
              <NavLink to="/signup" style={{ color: 'white' }}>
                Sign Up
              </NavLink>
            ]
          ) : (
            <SignOut />
          )}
        </li>
      </ul>
    </div>
  );
}
