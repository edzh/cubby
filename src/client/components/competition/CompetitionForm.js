import React, { useState } from 'react';
import { Redirect } from 'react-router';

const CompetitionForm = props => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [toCompetition, setToCompetition] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function onCompetitionSubmit(e) {
    e.preventDefault();

    postCompetition(name, date);

    clearInput();
  }

  function postCompetition(name, date) {
    fetch('/api/competition', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, date })
    })
      .then(response => response.json())
      .then(response => {
        console.log('Success:', JSON.stringify(response));
        setToCompetition(true);
      })
      .catch(error => console.error(error));
  }

  function clearInput() {
    setName('');
    setDate('');
  }

  if (toCompetition === true) {
    return <Redirect to="/competition" />;
  }

  return (
    <form data-testid="competitionForm" onSubmit={onCompetitionSubmit}>
      <input data-testid="formName" value={name} onChange={handleNameChange} />
      <input data-testid="formDate" value={date} onChange={handleDateChange} />
      <button data-testid="formSubmit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CompetitionForm;
