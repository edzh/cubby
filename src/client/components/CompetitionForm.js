import React, { useState } from 'react';

export default function CompetitionForm(props) {
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

    clearInput();
  }

  function clearInput() {
    setName('');
    setDate('');
  }

  return (
    <form onSubmit={onCompetitionSubmit}>
      <input value={name} onChange={handleNameChange} />
      <input value={date} onChange={handleDateChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
