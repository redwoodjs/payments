import { MetaTags } from '@redwoodjs/web'
import { useParams } from '@redwoodjs/router'
import { useEffect } from 'react'
import { retrieveCheckoutSession } from '../../../../plugin/stripe/lib/retrieveCheckoutSession'
import { handleCheckoutSessionCreation } from '../../../../plugin/stripe/lib/handleCheckoutSessionCreation'
import { handleCustomerPortalSessionCreation } from '../../../../plugin/stripe/lib/handleCustomerPortalSessionCreation'

const SESSION = {
    "id": "cs_test_a1fDMjBaGJRbpU0iI7VVEABEpc2bNqjYWAoajZFQucM2rexhiRZX3jfY3K",
    "object": "checkout.session",
    "after_expiration": null,
    "allow_promotion_codes": null,
    "amount_subtotal": 15000,
    "amount_total": 15000,
    "automatic_tax": {
        "enabled": false,
        "status": null
    },
    "billing_address_collection": null,
    "cancel_url": "http://localhost:8910/stripe-cart?success=false",
    "client_reference_id": null,
    "consent": null,
    "consent_collection": null,
    "currency": "zar",
    "customer": "cus_KId1WOvQF6yFrn",
    "customer_details": {
        "email": "nymanchristine@gmail.com",
        "tax_exempt": "none",
        "tax_ids": []
    },
    "customer_email": null,
    "expires_at": 1632766041,
    "livemode": false,
    "locale": null,
    "metadata": {},
    "mode": "subscription",
    "payment_intent": null,
    "payment_method_options": {},
    "payment_method_types": [
        "card"
    ],
    "payment_status": "paid",
    "recovered_from": null,
    "setup_intent": null,
    "shipping": null,
    "shipping_address_collection": null,
    "submit_type": null,
    "subscription": "sub_1Je1lcFnEy6nnTnpH29Eueai",
    "success_url": "http://localhost:8910/stripe-cart?success=true&sessionId={CHECKOUT_SESSION_ID}",
    "total_details": {
        "amount_discount": 0,
        "amount_shipping": 0,
        "amount_tax": 0
    },
    "url": null
}

const StripeCartPage = () => {
  const { success, sessionId } = useParams()

  const onCheckoutButtonClick = () => {
    handleCheckoutSessionCreation("subscription")
  }

  const onCustomerPortalButtonClick = () => {
    handleCustomerPortalSessionCreation(SESSION.customer)
  }

  useEffect(() => {
    const fetchSessionData = async () => {
      let sessionData
      if (success === 'true') {
        sessionData = await retrieveCheckoutSession(sessionId)
        console.log(sessionData)
      }
    }
    fetchSessionData()
  }, [success])

  return (

    <>
      <MetaTags
        title="Stripe Cart"
        description="A cart page for trying out the Stripe checkout"
      />

      <h2>Stripe Cart</h2>
      <p>Click the checkout button below to try out the Stripe Checkout</p>
      <ul className='cart-drop-down__list list--no-style'>
        <li className='cart-drop-down__list__item'>Item 1</li>
        <li className='cart-drop-down__list__item'>Item 2</li>
      </ul>
      <button onClick={onCheckoutButtonClick}>
        Checkout
      </button>

      {(SESSION.mode === 'subscription') && (
        <button onClick={onCustomerPortalButtonClick}>Customer Portal</button>
      )}
    </>
  )
}

export default StripeCartPage
