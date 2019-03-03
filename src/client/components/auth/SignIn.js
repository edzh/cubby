import React, { useState } from 'react';
import { Redirect } from 'react-router';

export default function(props) {
  const email = useFormInput('');
  const password = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    props.signIn(email.value, password.value);
  }

  if (props.isAuthenticated) {
    return <Redirect to="/competition" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" {...email} />
        <input type="passsword" {...password} />
        <button type="submit">Submit</button>
      </form>
    </div>
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
