import React, { useState } from 'react';

const CompetitionForm = props => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

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
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error(error));
  }

  function clearInput() {
    setName('');
    setDate('');
  }

  return (
    <form data-test="competitionForm" onSubmit={onCompetitionSubmit}>
      <input data-test="formName" value={name} onChange={handleNameChange} />
      <input data-test="formDate" value={date} onChange={handleDateChange} />
      <button data-test="formSubmit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CompetitionForm;
