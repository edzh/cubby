import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import fetchMock from 'fetch-mock';
import { render, getByTestId } from 'react-testing-library';

import CompetitionList from '../CompetitionList';

const setUp = (
  props = {
    isFetching: false,
    competitions: [],
    fetchCompetitions: jest.fn()
  }
) => {
  const component = render(
    <Router>
      <CompetitionList {...props} />
    </Router>
  );
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

  it('renders loading when competitions are being fetched', () => {
    component = render(
      <Router>
        <CompetitionList fetchCompetitions={jest.fn()} isFetching={true} />
      </Router>
    );

    expect(component.getByText('Loading...')).toBeTruthy();
  });

  it('renders competitions from props and fetches competitions', () => {
    const competitions = [
      { name: 'test comp 1', date: '2020' },
      { name: 'test comp 2', date: '2021' }
    ];
    const fetchCompetitions = jest.fn(() => competitions);
    component = render(
      <Router>
        <CompetitionList
          isFetching={false}
          competitions={competitions}
          fetchCompetitions={fetchCompetitions}
        />
      </Router>
    );

    expect(fetchCompetitions).toHaveBeenCalled();
    expect(component.getAllByTestId('competition')).toHaveLength(2);
  });
});
