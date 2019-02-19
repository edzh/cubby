import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Competition from './Competition';

export default function CompetitionList(props) {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    props.fetchCompetitions();
  }, []);

  // useEffect(() => {
  //   setCompetitions(props.competitions);
  // }, [props.competitions]);

  if (props.isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <table data-testid="competitionList">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.competitions.map((competition, index) => (
          <Competition competition={competition} key={index} />
        ))}
        <tr>
          <td>
            <Link to="/competition/create">+ Create Competition</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
