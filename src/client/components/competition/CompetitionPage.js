import React, { useEffect } from 'react';

const CompetitionPage = props => {
  useEffect(() => {
    props.fetchCompetition(props.id);
  }, []);

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.date}</h2>
    </div>
  );
};

export default CompetitionPage;
