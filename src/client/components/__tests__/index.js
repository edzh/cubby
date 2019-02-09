import React from 'react';
import ReactDOM from 'react-dom';

import CompetitionForm from '../CompetitionForm';
import CompetitionList from '../CompetitionList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompetitionList />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompetitionForm />, div);
});
