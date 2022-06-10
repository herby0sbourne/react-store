import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cartActions';

import './cart-icon.scss';

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleCartDropdown()),
  };
};

export default connect(undefined, mapDispatchToProps)(CartIcon);
