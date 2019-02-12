import React, { useState, useEffect } from 'react';

export default function CompetitionList(props) {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    fetch('/api/competition', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(blob => setCompetitions(blob.data))
      .catch(err => console.error(err));
  });

  return (
    <div data-test="competitionList">
      {competitions.map((competition, index) => (
        <p key={index}>{competition.name}</p>
      ))}
    </div>
  );
}
