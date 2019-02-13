import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'client/utils';

import CompetitionForm from '../CompetitionForm';

const setUp = (props = {}) => {
  const component = shallow(<CompetitionForm {...props} />);
  return component;
};

describe('CompetitionForm Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'competitionForm');
    expect(wrapper.length).toBe(1);
  });

  it('renders input fields', () => {
    const nameInput = findByTestAttr(component, 'formName');
    const dateInput = findByTestAttr(component, 'formDate');
    expect(nameInput.length).toBe(1);
    expect(dateInput.length).toBe(1);
  });

  it('renders submit button', () => {
    const wrapper = findByTestAttr(component, 'formSubmit');
    expect(wrapper.length).toBe(1);
  });
});
