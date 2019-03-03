import React, { useEffect } from 'react';

import Event from './Event';

export default function EventList(props) {
  useEffect(() => {
    if (props.competitionId !== undefined) {
      props.fetchEvents(props.competitionId);
    }
  }, [props.competitionId]);

  if (props.events.isFetching) {
    return <p>Loading</p>;
  }

  return (
    <ul>
      {props.events.data &&
        props.events.data.map((event, index) => (
          <Event key={index} event={event} />
        ))}
    </ul>
  );
}
