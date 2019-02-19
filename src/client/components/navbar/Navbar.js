import React from 'react';
import { NavLink } from 'react-router-dom';

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
      </ul>
    </div>
  );
}
