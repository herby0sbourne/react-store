import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          // console.log(cartItem);
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CartDropdown);
