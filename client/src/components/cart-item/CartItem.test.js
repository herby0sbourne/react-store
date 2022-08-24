import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CartItem } from './CartItem';

describe('CartItem component', () => {
  const mockItem = {
    imageUrl: 'www.testImage.com',
    price: 10,
    name: 'hats',
    quantity: 2,
  };

  test('should render CartItems', () => {
    const wrapper = shallow(<CartItem item={mockItem} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
