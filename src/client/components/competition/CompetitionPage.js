import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CompetitionPageNavContainer from '../../containers/CompetitionPageNavContainer';

import EventPage from '../event/EventPage';
import GMap from '../map/GMap';

const CompetitionPage = props => {
  useEffect(() => {
    props.fetchCompetition(props.id);
  }, []);

  return (
    <BrowserRouter>
      <div data-testid="competitionPage">
        <CompetitionPageNavContainer />
        <Route
          exact
          path={'/competition/id/:id'}
          render={() => (
            <div>
              <h1 data-testid="name">{props.name}</h1>
              <h2 data-testid="date">{props.date}</h2>
              <h2 data-testid="address">{props.address}</h2>
            </div>
          )}
        />
        <Route
          path={'/competition/id/:id/map'}
          render={() => (
            <div>
              <GMap />
            </div>
          )}
        />
        <Route
          path={'/competition/id/:id/events'}
          render={() => <EventPage />}
        />
      </div>
    </BrowserRouter>
  );
};

export default CompetitionPage;
