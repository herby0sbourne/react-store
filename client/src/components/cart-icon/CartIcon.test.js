import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CartIcon } from './CartIcon';

describe('CartIcon component', () => {
  let wrapper;
  let mockedToggleCart;

  beforeEach(() => {
    mockedToggleCart = jest.fn();

    const mockProps = {
      itemsCount: 0,
      toggleCart: mockedToggleCart,
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  test('should render CartIcon component', () => {
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call toggleCart when icon is clicked', () => {
    expect.assertions(1);
    wrapper.find('.cart-icon').simulate('click');
    expect(mockedToggleCart).toHaveBeenLastCalledWith();
  });

  test('should render the itemCount as the text', () => {
    expect.assertions(1);
    const itemCount = parseInt(wrapper.find('span').text());
    expect(itemCount).toEqual(0);
  });
});
