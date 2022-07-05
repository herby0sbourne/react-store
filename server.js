const path = require('path');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/payment', async (req, res) => {
  const { token, amount } = req.body;
  const body = {
    source: token.id,
    amount: amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });

  /*  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/shop`,
    cancel_url: `${req.protocol}://${req.get('host')}/.html`,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `cloth`,
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
  }); */

  // res.status(200).send({
  //   status: 'success',
  //   session,
  // });
  // res.redirect(303, session.url);
});

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`server listening on port ${PORT}`);
});
