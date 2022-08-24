import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import CustomButton from './CustomButton.jsx';

test('should render CustomButton', () => {
  const wrapper = shallow(<CustomButton />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
