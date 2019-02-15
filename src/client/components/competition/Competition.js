import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Competition(props) {
  // props.fetchCompetitions();

  function deleteCompetition(id) {
    fetch(`/api/competition/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)))
      .catch(error => console.error(error));
  }

  const { competition } = props;

  return (
    <div data-testid="competition">
      <Link to={`/competition/${competition._id}`}>
        <p>
          {competition.name}{' '}
          <span onClick={() => deleteCompetition(competition._id)}>x</span>
        </p>
      </Link>
    </div>
  );
}
