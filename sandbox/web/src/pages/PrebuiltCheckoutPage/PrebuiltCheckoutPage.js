import { Link, routes } from '@redwoodjs/router'
import { loadStripe } from "@stripe/stripe-js";
import { redirectCheckout} from 'rw-payments'

// const stripePromise = loadStripe(process.env.STRIPE_PK_TEST)

const PrebuiltCheckoutPage = () => {
  const handleCheckoutButtonClick = async () => {
    redirectCheckout({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:8910/success`,
    cancel_url: `http://localhost:8910/cancel`,
  })
  //   const stripe = await stripePromise;
  //   const response = await global.fetch(`${global.__REDWOOD__API_PROXY_PATH}/createCheckoutSession`, {
  //     method: "POST",
  //   })
  //   const session = await response.json()
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.id
  //   });

  //  if (result.error) {
  //    console.log(result.error.message)
  //  }

  }
  return (
    <>
      <h1>PrebuiltCheckoutPage</h1>
      <p>
        Let's pretend there is a list of items here and a few buttons to edit the list
      </p>
      <button type="button" id="checkout-button" onClick={() => handleCheckoutButtonClick()}>Checkout</button>
    </>
  )
}

export default PrebuiltCheckoutPage
