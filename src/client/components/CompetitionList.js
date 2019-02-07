import React, { useEffect } from 'react';

export default function CompetitionList(props) {
  useEffect(() => {
    fetch('/api/competition')
      .then(response => response.json())
      .then(data => console.log(data));
  });

  return <div />;
}
