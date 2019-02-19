import React, { useEffect } from 'react';

const CompetitionPage = props => {
  useEffect(() => {
    props.fetchCompetition(props.id);
  }, []);

  return (
    <div data-testid="competitionPage">
      <h1 data-testid="name">{props.name}</h1>
      <h2 data-testid="date">{props.date}</h2>
    </div>
  );
};

export default CompetitionPage;
