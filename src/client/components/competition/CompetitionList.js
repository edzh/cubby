import React, { useState, useEffect } from 'react';
import Competition from './Competition';

export default function CompetitionList(props) {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    props.fetchCompetitions();
  }, []);

  useEffect(() => {
    setCompetitions(props.competitions);
  }, [props.competitions]);

  // if (props.isFetching) {
  //   return null;
  // }
  return (
    <div data-testid="competitionList">
      {competitions &&
        competitions.map((competition, index) => (
          <Competition competition={competition} key={index} />
        ))}
    </div>
  );
}
