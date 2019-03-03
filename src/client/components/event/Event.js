import React from 'react';

export default function Event(props) {
  return (
    <li>
      <p>{props.event.name}</p>
      <p>{props.event.round}</p>
      <p>
        {props.event.beginTime}-{props.event.endTime}
      </p>
    </li>
  );
}
