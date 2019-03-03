import React from 'react';
import EventFormContainer from '../../containers/EventFormContainer';
import EventListContainer from '../../containers/EventListContainer';

export default function EventPage(props) {
  return (
    <div>
      <EventListContainer />
      <EventFormContainer />
    </div>
  );
}
