import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CartDropdown } from './CartDropdown';
import { toggleCartDropdown } from '../../redux/cart/cartActions';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

let mockDispatch;
mockDispatch = jest.fn();

test('should render cart dropdown with empty message', () => {
  expect.assertions(1);
  const wrapper = shallow(<CartDropdown cartItems={[]} dispatch={mockDispatch} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render cart dropdown with with cart item', () => {
  expect.assertions(1);
  const wrapper = shallow(<CartDropdown cartItems={cartItems} dispatch={mockDispatch} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should call navigate when button is clicked', () => {
  expect.assertions(2);
  const wrapper = shallow(<CartDropdown cartItems={[]} dispatch={mockDispatch} />);
  wrapper.find('CustomButton').simulate('click');
  expect(mockedNavigate).toHaveBeenCalledWith('/checkout');
  expect(mockDispatch).toHaveBeenCalledWith(toggleCartDropdown());
});

const cartItems = [
  {
    id: 1,
    imageUrl: 'https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_default_intro',
    price: '1200',
    name: 'New Car',
    quantity: '3',
  },
  {
    id: 2,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-washing-machines-1589999096.png?crop=0.654xw:1.00xh;0.175xw,0&resize=640:*',
    price: '100',
    name: 'washing Machine',
    quantity: '1',
  },
];
