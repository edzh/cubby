import React from 'react';
import { render } from 'react-testing-library';

import CompetitionPage from '../CompetitionPage';

const setUp = (props = {}) => {
  const component = render(<CompetitionPage {...props} />);
  return component;
};

describe('CompetitionPage Component', () => {
  const props = {
    fetchCompetition: jest.fn(),
    name: 'test competition',
    date: '2020'
  };

  let component;

  beforeEach(() => {
    component = setUp(props);
  });

  it('renders without crashing', () => {
    const wrapper = component.getByTestId('competitionPage');
    const competitionName = component.getByTestId('name');
    const competitionDate = component.getByTestId('date');

    expect(wrapper).toBeTruthy();
  });
});
