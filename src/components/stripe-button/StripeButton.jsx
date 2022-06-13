import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    'pk_test_51JnRMMGOwV6v6OJprUsV6BD7gtwhc9abgIWJfIXyw9hpWR854OJtUDOLIpNuVC31idyp370PDOpx9rxodYVA3XTS00AjtxTouk';

  const onToken = (token) => {
    console.log(token);
    alert('payment Successfull');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="React Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
