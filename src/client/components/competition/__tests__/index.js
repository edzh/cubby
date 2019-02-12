import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr } from 'client/utils';

import CompetitionList from '../CompetitionList';

const setUp = (props = {}) => {
  const component = shallow(<CompetitionList {...props} />);
  return component;
};

describe('Competition Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('renders without crashing', () => {
    const wrapper = findByTestAttr(component, 'competitionList');
    expect(wrapper.length).toBe(1);
  });
});
