import React from 'react';
import { connect } from 'react-redux';
import {
  removeFromCart,
  addToCart,
  reduceItem,
} from '../../redux/cart/cartActions';

import './checkout-item.scss';

const CheckOutItem = ({ cartItem, removeFromCart, addItem, reduceItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeFromCart(id)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    addItem: (item) => dispatch(addToCart(item)),
    reduceItem: (item) => dispatch(reduceItem(item)),
  };
};

export default connect(undefined, mapDispatchToProps)(CheckOutItem);
