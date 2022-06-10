import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }) => {
  return (
    <button
      // className={`${isGoogleSignIn && 'google-sign-in'} custom-button`}
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
