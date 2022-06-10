import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import CustomButton from '../custom-button/CustomButton';

import './collection-item.scss';

const CollectionItem = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(undefined, mapDispatchToProps)(CollectionItem);
