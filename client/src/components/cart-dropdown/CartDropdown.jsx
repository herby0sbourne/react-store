import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleCartDropdown } from '../../redux/cart/cartActions';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          dispatch(toggleCartDropdown());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
