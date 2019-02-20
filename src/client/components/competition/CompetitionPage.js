import React, { useEffect } from 'react';
import GMap from '../map/GMap';

const CompetitionPage = props => {
  useEffect(() => {
    props.fetchCompetition(props.id);
  }, []);

  return (
    <div data-testid="competitionPage">
      <h1 data-testid="name">{props.name}</h1>
      <h2 data-testid="date">{props.date}</h2>
      <h2 data-testid="address">{props.address}</h2>
      <GMap />
    </div>
  );
};

export default CompetitionPage;
