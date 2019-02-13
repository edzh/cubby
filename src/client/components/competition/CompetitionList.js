import React, { useState, useEffect } from 'react';

export default function CompetitionList(props) {
  const [competitions, setCompetitions] = useState(props.competitions);

  return (
    <div data-test="competitionList">
      {competitions &&
        competitions.map((competition, index) => (
          <p key={index}>{competition.name}</p>
        ))}
    </div>
  );
}
