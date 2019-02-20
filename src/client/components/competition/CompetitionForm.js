import React, { useState } from 'react';
import { Redirect } from 'react-router';
import PlacesAutocomplete from './PlacesAutocomplete';

export default function CompetitionForm(props) {
  const name = useFormInput('');
  const date = useFormInput('');
  const [address, setAddress] = useState('');
  const [toCompetition, setToCompetition] = useState(false);

  function onCompetitionSubmit(e) {
    e.preventDefault();

    postCompetition(name.value, date.value, address);
  }

  function postCompetition(name, date, address) {
    fetch('/api/competition', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, date, address })
    })
      .then(response => response.json())
      .then(response => {
        console.log('Success:', JSON.stringify(response));
        setToCompetition(true);
      })
      .catch(error => console.error(error));
  }

  if (toCompetition === true) {
    return <Redirect to="/competition" />;
  }

  return (
    <form data-testid="competitionForm" onSubmit={onCompetitionSubmit}>
      <input data-testid="formName" {...name} />
      <input data-testid="formDate" type="date" {...date} />
      <PlacesAutocomplete setAddress={setAddress} />
      <button data-testid="formSubmit" type="submit">
        Submit
      </button>
    </form>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}
