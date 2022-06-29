import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    'pk_test_51JnRMMGOwV6v6OJprUsV6BD7gtwhc9abgIWJfIXyw9hpWR854OJtUDOLIpNuVC31idyp370PDOpx9rxodYVA3XTS00AjtxTouk';

  const onToken = async (token) => {
    try {
      axios({
        method: 'POST',
        url: 'payment',
        data: {
          amount: priceForStripe,
          token,
        },
      })
        .then((response) => {
          alert('succesful payment');
        })
        .catch((error) => {
          console.log('Payment Error: ', error);
          alert(
            'There was an issue with your payment! Please make sure you use the provided credit card.'
          );
        });
    } catch (error) {
      console.log(error);
    }

    // console.log(token);
    // alert('payment Successfull');
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
