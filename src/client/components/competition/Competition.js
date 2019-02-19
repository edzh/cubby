import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Competition(props) {
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
    <tr data-testid="competition">
      <td>
        <Link to={`/competition/id/${competition._id}`}>
          {competition.name}
        </Link>
      </td>
      <td>{competition.date}</td>
      <td onClick={() => deleteCompetition(competition._id)}>x</td>
    </tr>
  );
}
