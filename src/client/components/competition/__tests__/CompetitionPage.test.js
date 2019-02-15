import React from 'react';
import { render } from 'react-testing-library';

import CompetitionPage from '../CompetitionPage';

const setUp = (props = {}) => {
  const component = render(<CompetitionPage {...props} />);
};

describe('CompetitionPage Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders without crashing', () => {
    const wrapper = component.getByTestId('competitionPage');
    const competitionName = component.getByTestId('name');
    const competitionDate = component.getByTestId('date');

    expect(wrapper).toBeTruthy();
  });
});
