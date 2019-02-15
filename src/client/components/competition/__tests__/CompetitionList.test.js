import React from 'react';
import { render, getByTestId } from 'react-testing-library';

import CompetitionList from '../CompetitionList';

const setUp = (
  props = {
    isFetching: false,
    competitions: [],
    fetchCompetitions: jest.fn(() => {
      competitions: ['new comp'];
    })
  }
) => {
  const component = render(<CompetitionList {...props} />);
  return component;
};

describe('CompetitionList Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders without crashing', () => {
    const wrapper = component.getByTestId('competitionList');
    expect(wrapper).toBeTruthy();
  });
});
