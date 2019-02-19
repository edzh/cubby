import React from 'react';
import { render, cleanup, getByTestId, fireEvent } from 'react-testing-library';
import fetchMock from 'fetch-mock';

import CompetitionForm from '../CompetitionForm';

const setUp = (props = {}) => {
  const component = render(<CompetitionForm {...props} />);
  return component;
};

describe('CompetitionForm Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  afterEach(() => {
    cleanup;
    fetchMock.restore();
  });

  it('renders without crashing', () => {
    const { getByTestId } = component;
    expect(getByTestId('competitionForm')).toBeTruthy();
  });

  it('renders input fields', () => {
    const nameInput = component.getByTestId('formName');
    const dateInput = component.getByTestId('formDate');

    expect(nameInput).toBeTruthy();
    expect(dateInput).toBeTruthy();
  });

  it('renders submit button', () => {
    const wrapper = component.getByTestId('formSubmit');
    expect(wrapper).toBeTruthy();
  });

  it('renders text in input field', () => {
    const form = component.getByTestId('competitionForm');
    const nameInput = component.getByTestId('formName');
    const dateInput = component.getByTestId('formDate');
    const formSubmit = component.getByTestId('formSubmit');

    fireEvent.change(nameInput, { target: { value: 'y' } });
    fireEvent.change(dateInput, { target: { value: '10' } });

    expect(nameInput.value).toBe('y');
    expect(dateInput.value).toBe('10');

    fireEvent(formSubmit, new MouseEvent('click'));

    expect(nameInput.value).toBe('');
    expect(dateInput.value).toBe('');
  });

  // it('returns body from post request', async () => {
  //   fetchMock.post('/api/competition', {status})
  // })
});
