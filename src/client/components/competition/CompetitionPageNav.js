import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CompetitionPageNav(props) {
  return (
    <ul style={{ backgroundColor: 'black' }}>
      <li>
        <NavLink to={`/competition/id/${props.id}`} style={{ color: 'white' }}>
          Details
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/competition/id/${props.id}/map`}
          style={{ color: 'white' }}
        >
          Map
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/competition/id/${props.id}/events`}
          style={{ color: 'white' }}
        >
          Events
        </NavLink>
      </li>
    </ul>
  );
}
