import React, { useState } from 'react';

export default function EventForm(props) {
  const name = useFormInput('');
  const round = useFormInput('');
  const beginTime = useFormInput('');
  const endTime = useFormInput('');

  function onSubmit(e) {
    e.preventDefault();
    postEvent(name.value, round.value, beginTime.value, endTime.value);
  }

  function postEvent(name, round, beginTime, endTime) {
    fetch('/api/event', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('id_token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        competitionId: props.competitionId,
        name,
        round,
        beginTime,
        endTime
      })
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <select {...name}>
        <option>---</option>
        <option value="cube2">2x2x2 Cube</option>
        <option value="cube3">Rubik's Cube</option>
        <option value="cube4">4x4x4 Cube</option>
        <option value="cube5">5x5x5 Cube</option>
        <option value="cube6">6x6x6 Cube</option>
        <option value="cube7">7x7x7 Cube</option>
        <option value="blind">3x3x3 Blindfolded</option>
        <option value="fm">3x3x3 Fewest Moves</option>
        <option value="oh">3x3x3 One Handed</option>
        <option value="feet">3x3x3 With Feet</option>
        <option value="megaminx">Megaminx</option>
        <option value="pyraminx">Pyraminx</option>
        <option value="clock">Rubik's Clock</option>
        <option value="sq1">Square-1</option>
        <option value="blind4">4x4x4 Blindfolded</option>
        <option value="blind5">5x5x5 Blindfolded</option>
        <option value="multiblind">3x3x3 Multi-Blind</option>
      </select>
      <select {...round}>
        <option>---</option>
        <option value="Round 1">Round 1</option>
        <option value="Round 2">Round 2</option>
        <option value="Final">Final</option>
        <option value="Combined Final">Combined Final</option>
      </select>
      <input type="time" {...beginTime} />
      <input type="time" {...endTime} />
      <button>Submit</button>
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
